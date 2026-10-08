import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Popover,
  Popper ,
  MenuItem,
  Box,
  styled
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  ChevronRight,
  ShieldOutlined,
  Speed,
   Traffic,
  CarRepair,
    LocalParkingOutlined,
    LocalPoliceOutlined,
    DirectionsCarFilledOutlined

} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import dentallogo from "../../assets/homepage/footerlogo-1.svg";
import { siteSearchIndex } from '../../utils/siteSearchIndex';
import { searchByKeywords } from '../../utils/searchUtils';

const NAV_FONT_FAMILY = '"Poppins", sans-serif';

// Custom bullet-camera icon representing the TrafficSenz ANPR camera
const TrafficSenzIcon = ({ size = 30, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    {/* mounting bracket */}
    <path d="M6 6V4.8C6 4.13726 6.53726 3.6 7.2 3.6H9.6" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    {/* camera body */}
    <rect x="2.5" y="8.5" width="13" height="7" rx="1.6" stroke={color} strokeWidth="1.5" />
    {/* lens */}
    <circle cx="9" cy="12" r="2.1" stroke={color} strokeWidth="1.5" />
    <circle cx="9" cy="12" r="0.6" fill={color} />
    {/* lens hood / front rim */}
    <path d="M15.5 10L20.8 8V16L15.5 14" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    {/* IR / signal rays */}
    <path d="M4.2 6.8L3 5.6M20.8 5.3L19.6 6.5M20.8 18.7L19.6 17.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f1f2f2',
  boxShadow: '0 4px 30px rgba(121, 116, 116, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  fontFamily: `${NAV_FONT_FAMILY} !important`,
  '& *': {
    fontFamily: `${NAV_FONT_FAMILY} !important`,
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#003873',
  fontFamily: `${NAV_FONT_FAMILY} !important`,
  fontWeight: 400,
  fontSize: '1em',
  margin: theme.spacing(0, 2),
  whiteSpace: 'nowrap',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: '#00aeef',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: 'rgba(2, 2, 2, 0.2)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px 0 0 16px',
    width: '93%',
    color: 'white',
    fontFamily: `${NAV_FONT_FAMILY} !important`,
    '& *': {
      fontFamily: `${NAV_FONT_FAMILY} !important`,
    },
  },
}));

const NavBar = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [anchorElIndustries, setAnchorElIndustries] = useState(null);
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const closeTimeoutRef = useRef(null);

  const parkingCloseTimeoutRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [anchorElResources, setAnchorElResources] = useState(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // --- NEW: Solutions state ---
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const [mobileParkingOpen, setMobileParkingOpen] = useState(false);

  const [anchorElParking, setAnchorElParking] = useState(null);

  // --- NEW: ALPR Cameras submenu toggle (desktop + mobile) ---
  const [alprMenuOpen, setAlprMenuOpen] = useState(false);
  const [mobileAlprOpen, setMobileAlprOpen] = useState(false);


  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const searchEngine = useMemo(() => {
    return new Fuse(siteSearchIndex, {
      keys: ['title', 'description', 'keywords'],
      threshold: 0.34,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, []);

  const searchResults = useMemo(() => {
    return searchByKeywords(searchEngine, searchQuery, 'path', 8);
  }, [searchEngine, searchQuery]);

  const handlePopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setAlprMenuOpen(false);
    }, 100);
  };

  const handleIndustriesPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElIndustries(event.currentTarget);
  };

  const handleIndustriesPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElIndustries(null);
    }, 100);
  };

  const handlePopoverEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    if (!open) setAnchorEl(anchorEl);
  };

  useEffect(() => {
    if (!mobileOpen) {
      setMobileMenuOpen(false);
      setMobileIndustriesOpen(false);
      setMobileResourcesOpen(false);
      setMobileSolutionsOpen(false); // reset solutions on drawer close
          setMobileParkingOpen(false);
          setMobileAlprOpen(false);

    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  const handlePopoverLeave = () => {
    setAnchorEl(null);
    setAnchorElIndustries(null);
    setAnchorElResources(null);
    setAnchorElSolutions(null); // close solutions too
    setAlprMenuOpen(false);
  };

  const handleResourcesPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElResources(event.currentTarget);
  };

  const handleResourcesPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElResources(null);
    }, 100);
  };

  // --- NEW: Solutions handlers ---
  const handleSolutionsPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElSolutions(event.currentTarget);
  };

  const handleSolutionsPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElSolutions(null);
    }, 100);
  };

// const handleParkingPopoverOpen = (event) => {
//   clearTimeout(parkingCloseTimeoutRef.current);
//   setAnchorElParking(event.currentTarget);
// };

// const handleParkingPopoverClose = () => {
//   parkingCloseTimeoutRef.current = setTimeout(() => {
//     setAnchorElParking(null);
    
//   }, 150);
// };

  const open = Boolean(anchorEl);
  const openIndustries = Boolean(anchorElIndustries);

  const trafficEnforcementParent = {
    label: 'Traffic Enforcement Cameras',
    path: '/solutions/traffic-enforcement-camera',
  };

  const trafficEnforcementChildren = [
    {
      label: 'Speed Enforcement Cameras',
      path: '/solutions/speed-enforcement-camera',
      icon: Speed,
    },
    {
      label: 'Red Light Violation Detection Cameras',
      path: '/solutions/red-light-violation-detection-camera',
      icon: Traffic,
    },
     
  ];

   const smartParkingManagementParent = {
     label: 'Smart Parking Management Cameras',
        path: '/solutions/smart-parking-management',
    };
  
  
     const smartParkingChildren = [
       {
        label: 'Parking Access Control Cameras',
        path: '/solutions/parking-access-control-camera',
        icon: LocalParkingOutlined,
      },
      {
        label: 'Occupancy Detection Cameras',
        path: '/solutions/parking-occupancy-detection-camera',
        icon: DirectionsCarFilledOutlined,
      },
       {
        label: 'Parking Enforcement Cameras',
        path: '/solutions/parking-enforcement-camera',
        icon: CarRepair,
      },
     
    ];

 const handleSolutionsItemClick = () => {
  clearTimeout(closeTimeoutRef.current);
  clearTimeout(parkingCloseTimeoutRef.current);

  setAnchorElSolutions(null);
  setAnchorElParking(null);

  setMobileOpen(false);
  setMobileSolutionsOpen(false);
  setMobileParkingOpen(false);
};

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchOpen(true);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length < 2) {
      return;
    }

    setSearchOpen(false);
    setMobileOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  const handleSearchResultClick = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length < 2) {
      return;
    }

    setSearchOpen(false);
    setMobileOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  const menuItemStyles = {
    '& .MuiMenuItem-root': {
      color: '#344ea1',
      fontSize: '1em',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: '#00aeef',
        color: 'white',
      }
    }
  };

  const SolutionMenu = (
    <Box sx={{ p: 1, width: 300, ...menuItemStyles }}>
      <MenuItem
        onClick={() => setAlprMenuOpen((prev) => !prev)}
        onMouseEnter={() => setAlprMenuOpen(true)}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Box
          component={Link}
          to="/products/anpr-alpr-bullet-cameras"
          onClick={(event) => {
            event.stopPropagation();
            handlePopoverClose();
            setMobileOpen(false);
            setMobileMenuAnchor(null);
          }}
          sx={{ textDecoration: 'none', color: 'inherit', flex: 1 }}
        >
          ALPR Cameras
        </Box>
        {alprMenuOpen ? <ExpandLess sx={{ color: 'inherit' }} /> : <ExpandMore sx={{ color: 'inherit' }} />}
      </MenuItem>
      {alprMenuOpen && (
        <MenuItem
          component={Link}
          to="/products/trafficsenz/edge-ai-alpr-camera"
          onClick={() => {
            handlePopoverClose();
            setMobileOpen(false);
            setMobileMenuAnchor(null);
            setAlprMenuOpen(false);
          }}
          sx={{ pl: 3.5, fontSize: '0.9em', display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <TrafficSenzIcon size={18} color="currentColor" />
          TrafficSenz Camera
        </MenuItem>
      )}
      <MenuItem
        component={Link} 
        to="/products/ai-vision-box" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        AI Vision Box
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/products/license-plate-recognition-software" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        ALPR SDK
      </MenuItem>
    </Box>
  );

  const IndustriesMenu = (
    <Box sx={{ p: 1, width: 300, ...menuItemStyles }}>
      <MenuItem component={Link} to="/smart-cities" onClick={() => { handleIndustriesPopoverClose(); setMobileOpen(false); }}>
        Smart Cities
      </MenuItem>
      <MenuItem component={Link} to="/traffic-management" onClick={() => { handleIndustriesPopoverClose(); setMobileOpen(false); }}>
        Traffic Management
      </MenuItem>
      <MenuItem component={Link} to="/tolling-&-highway-infrastructure" onClick={() => { handleIndustriesPopoverClose(); setMobileOpen(false); }}>
        Tolling & Highway Infrastructure
      </MenuItem>
      <MenuItem component={Link} to="/parking-lot-management" onClick={() => { handleIndustriesPopoverClose(); setMobileOpen(false); }}>
        Parking Lot Management
      </MenuItem>
      <MenuItem component={Link} to="/public-safety-&-law-enforcement" onClick={() => { handleIndustriesPopoverClose(); setMobileOpen(false); }}>
        Public safety & law enforcement
      </MenuItem>
    </Box>
  );

  const ResourcesMenu = (
    <Box sx={{ p: 1, width: 250, ...menuItemStyles }}>
      <MenuItem component={Link} to="/blog" onClick={handleResourcesPopoverClose}>
        Blogs
      </MenuItem>
      <MenuItem component={Link} to="/videos" onClick={handleResourcesPopoverClose}>
        Videos
      </MenuItem>
      <MenuItem component={Link} to="/case-study" onClick={handleResourcesPopoverClose}>
        Case Studies
      </MenuItem>
      <MenuItem component={Link} to="/events" onClick={handleResourcesPopoverClose}>
        Events
      </MenuItem>
    </Box>
  );

  // --- NEW: Solutions Menu ---
  const SolutionsMenu = (
     <Box
       sx={{
         width: { xs: 'calc(100vw - 24px)', sm: 400 },
         maxWidth: 400,
         border: '1px solid #9ec6ea',
         borderRadius: '5px',
         overflow: 'hidden',
         backgroundColor: '#ffffff',
         position: 'relative',
       }}
     >
       <Box
         component={Link}
         to={trafficEnforcementParent.path}
         onClick={handleSolutionsItemClick}
         sx={{
           display: 'flex',
           alignItems: 'center',
           gap: 1,
           textDecoration: 'none',
           px: 1.5,
           py: 1.35,
           color: '#003873',
           backgroundColor: '#ffffff',
           borderBottom: '1px solid #d4e2f0',
           '&:hover': {
             backgroundColor: '#f5fafe',
           },
         }}
       >
         <Typography sx={{ fontSize: { xs: '0.94rem', sm: '0.98rem' }, fontWeight: 500, lineHeight: 1.25, color: '#083b78' }}>
           {trafficEnforcementParent.label}
         </Typography>
       </Box>
 
 
       <Box sx={{ px: { xs: 1.1, sm: 1.25 }, py: { xs: 1.2, sm: 1.25 }, backgroundColor: '#ffffff' }}>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 0.5 } }}>
           {trafficEnforcementChildren.map((item) => {
             const ItemIcon = item.icon;
 
 
             return (
               <Box
                 component={Link}
                 to={item.path}
                 key={item.path}
                 onClick={handleSolutionsItemClick}
                 sx={{
                   textDecoration: 'none',
                   display: 'grid',
                   gridTemplateColumns: { xs: '52px 1fr 16px', sm: '62px 1fr 18px' },
                   alignItems: 'center',
                   columnGap: { xs: 0.75, sm: 0.75 },
                   borderRadius: 2,
                   p: { xs: 0.5, sm: 0.5 },
                   transition: 'background-color 0.2s ease',
                   '&:hover': {
                     backgroundColor: '#f3f9ff',
                   },
                 }}
               >
                 <Box
                   sx={{
                     width: 40,
                     height: 40,
                     borderRadius: '10px',
                     background: 'linear-gradient(180deg, #f1f5fb, #e8eef7)',
                     display: 'grid',
                     placeItems: 'center',
                     color: '#0a4c96',
                     border: '1px solid #e2e9f2',
                     flexShrink: 0,
                   }}
                 >
                   <ItemIcon sx={{ fontSize: 24 }} />
                 </Box>
 
 
                 <Box>
                   <Typography
                     sx={{
                       color: '#083b78',
                       fontSize: '0.9rem',
                       fontWeight: 400,
                       lineHeight: 1.2,
                       mb: 0.2,
                     }}
                   >
                     {item.label}
                   </Typography>
                 </Box>
 
 
                 <ChevronRight sx={{ color: '#0a4f98', fontSize: { xs: 18, sm: 18 } }} />
               </Box>
             );
           })}
         </Box>
       </Box>
 
 
         <Box
         component={Link}
         to={smartParkingManagementParent.path}
         onClick={handleSolutionsItemClick}
         sx={{
           display: 'flex',
           alignItems: 'center',
           gap: 1,
           textDecoration: 'none',
           px: 1.5,
           py: 1.35,
           color: '#003873',
           backgroundColor: '#ffffff',
           borderBottom: '1px solid #d4e2f0',
           '&:hover': {
             backgroundColor: '#f5fafe',
           },
         }}
       >
         <Typography sx={{ fontSize: { xs: '0.94rem', sm: '0.98rem' }, fontWeight: 500, lineHeight: 1.25, color: '#083b78' }}>
           {smartParkingManagementParent.label}
         </Typography>
       </Box>
 
 
        <Box sx={{ px: { xs: 1.1, sm: 1.25 }, py: { xs: 1.2, sm: 1.25 }, backgroundColor: '#ffffff' }}>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 0.5 } }}>
           {smartParkingChildren.map((item) => {
             const ItemIcon = item.icon;
 
 
             return (
               <Box
                 component={Link}
                 to={item.path}
                 key={item.path}
                 onClick={handleSolutionsItemClick}
                 sx={{
                   textDecoration: 'none',
                   display: 'grid',
                   gridTemplateColumns: { xs: '52px 1fr 16px', sm: '62px 1fr 18px' },
                   alignItems: 'center',
                   columnGap: { xs: 0.75, sm: 0.75 },
                   borderRadius: 2,
                   p: { xs: 0.5, sm: 0.5 },
                   transition: 'background-color 0.2s ease',
                   '&:hover': {
                     backgroundColor: '#f3f9ff',
                   },
                 }}
               >
                 <Box
                   sx={{
                     width: 40,
                     height: 40,
                     borderRadius: '10px',
                     background: 'linear-gradient(180deg, #f1f5fb, #e8eef7)',
                     display: 'grid',
                     placeItems: 'center',
                     color: '#0a4c96',
                     border: '1px solid #e2e9f2',
                     flexShrink: 0,
                   }}
                 >
                   <ItemIcon sx={{ fontSize: 24 }} />
                 </Box>
 
 
                 <Box>
                   <Typography
                     sx={{
                       color: '#083b78',
                       fontSize: '0.9rem',
                       fontWeight: 400,
                       lineHeight: 1.2,
                       mb: 0.2,
                     }}
                   >
                     {item.label}
                   </Typography>
                 </Box>
 
 
                 <ChevronRight sx={{ color: '#0a4f98', fontSize: { xs: 18, sm: 18 } }} />
               </Box>
             );
           })}
         </Box>
       </Box>
     </Box>
   );

  const drawerContent = (
    <>
      <Box sx={{ 
        p: 2, 
        borderBottom: '1px solid white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'  
      }}>
        <Typography variant="h6" sx={{ color: 'white' }}>Menu</Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>
      </Box>
      <List sx={{ p: 1 }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={handleDrawerToggle} sx={{ '&:hover': { color: '#00aeef' } }}>
            <ListItemText primary="Home" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>

        {/* Products */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} sx={{ '&:hover': { color: '#00aeef' } }}>
            <ListItemText primary="Products" primaryTypographyProps={{ style: { color: 'white' } }} />
            {mobileMenuOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
          </ListItemButton>
        </ListItem>
        {mobileMenuOpen && (
          <List sx={{ pl: 2 }}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setMobileAlprOpen(!mobileAlprOpen)}
                sx={{ '&:hover .MuiListItemText-primary': { color: '#00aeef' }, pl: 2 }}
              >
                <ListItemText
                  primary="ALPR Cameras"
                  primaryTypographyProps={{ sx: { color: 'white', fontSize: '0.85em', textAlign: 'left' } }}
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate('/products/anpr-alpr-bullet-cameras');
                    handleDrawerToggle();
                  }}
                />
                {mobileAlprOpen ? <ExpandLess sx={{ color: 'white', fontSize: '1.1rem' }} /> : <ExpandMore sx={{ color: 'white', fontSize: '1.1rem' }} />}
              </ListItemButton>
            </ListItem>
            {mobileAlprOpen && (
              <List sx={{ pl: 2 }}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/products/trafficsenz/edge-ai-alpr-camera"
                    onClick={handleDrawerToggle}
                    sx={{ '&:hover .MuiListItemText-primary': { color: '#00aeef' }, pl: 2, gap: 1 }}
                  >
                    <TrafficSenzIcon size={16} color="#ffffff" />
                    <ListItemText primary="TrafficSenz Camera" primaryTypographyProps={{ sx: { color: 'white', fontSize: '0.8em', textAlign: 'left' } }} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
            {[
              { label: 'AI Vision Box', path: '/products/ai-vision-box' },
              { label: 'ALPR SDK', path: '/products/license-plate-recognition-software' },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={handleDrawerToggle} sx={{ '&:hover .MuiListItemText-primary': { color: '#00aeef' }, pl: 2 }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ sx: { color: 'white', fontSize: '0.85em', textAlign: 'left' } }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}

        {/* NEW: Solutions (Mobile) */}
         <ListItem disablePadding>
                  <ListItemButton onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} sx={{ '&:hover': { color: '#00aeef' } }}>
                    <ListItemText primary="Solutions" primaryTypographyProps={{ style: { color: 'white' } }} />
                    {mobileSolutionsOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
                  </ListItemButton>
                </ListItem>
                {mobileSolutionsOpen && (
                  <Box
                    sx={{
                      ml: 2,
                      mr: 1,
                      mb: 0.8,
                      border: '1px solid #9ec6ea',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <Box
                      component={Link}
                      to={trafficEnforcementParent.path}
                      onClick={handleSolutionsItemClick}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        px: 1.5,
                        py: 1.25,
                        color: '#083b78',
                        backgroundColor: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        lineHeight: 1.2,
                        borderBottom: '1px solid #d4e2f0',
                      }}
                      >
                      {trafficEnforcementParent.label}
                    </Box>
        
        
                    <Box sx={{ px: 1, py: 1.2 }}>
                      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.65 }}>
                        {trafficEnforcementChildren.map((item) => {
                          const ItemIcon = item.icon;
        
        
                          return (
                            <Box
                              component={Link}
                              to={item.path}
                              key={`mobile-${item.path}`}
                              onClick={handleSolutionsItemClick}
                              sx={{
                                textDecoration: 'none',
                                display: 'grid',
                                gridTemplateColumns: '46px 1fr 16px',
                                alignItems: 'center',
                                columnGap: 1,
                                borderRadius: 2,
                                p: 0.6,
                                '&:hover': {
                                  backgroundColor: '#f3f9ff',
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '10px',
                                  background: 'linear-gradient(180deg, #f1f5fb, #e8eef7)',
                                  display: 'grid',
                                  placeItems: 'center',
                                  color: '#0a4c96',
                                  border: '1px solid #e2e9f2',
                                  flexShrink: 0,
                                }}
                              >
                                <ItemIcon sx={{ fontSize: 24 }} />
                              </Box>
        
        
                              <Box>
                                <Typography sx={{ color: '#083b78', fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.2, mb: 0.2 }}>
                                  {item.label}
                                </Typography>
                              </Box>
        
        
                              <ChevronRight sx={{ color: '#0a4f98', fontSize: 18 }} />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
        
        
        
        
        
        
        {/* smart parking menu */}
         <Box
                      component={Link}
                      to={smartParkingManagementParent.path}
                      onClick={handleSolutionsItemClick}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        px: 1.5,
                        py: 1.25,
                        color: '#083b78',
                        backgroundColor: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        lineHeight: 1.2,
                        borderBottom: '1px solid #d4e2f0',
                      }}
                      >
                      {smartParkingManagementParent.label}
                    </Box>
        
        
                    <Box sx={{ px: 1, py: 1.2 }}>
                      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.65 }}>
                        {smartParkingChildren.map((item) => {
                          const ItemIcon = item.icon;
        
        
                          return (
                            <Box
                              component={Link}
                              to={item.path}
                              key={`mobile-${item.path}`}
                              onClick={handleSolutionsItemClick}
                              sx={{
                                textDecoration: 'none',
                                display: 'grid',
                                gridTemplateColumns: '46px 1fr 16px',
                                alignItems: 'center',
                                columnGap: 1,
                                borderRadius: 2,
                                p: 0.6,
                                '&:hover': {
                                  backgroundColor: '#f3f9ff',
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '10px',
                                  background: 'linear-gradient(180deg, #f1f5fb, #e8eef7)',
                                  display: 'grid',
                                  placeItems: 'center',
                                  color: '#0a4c96',
                                  border: '1px solid #e2e9f2',
                                  flexShrink: 0,
                                }}
                              >
                                <ItemIcon sx={{ fontSize: 24 }} />
                              </Box>
        
        
                              <Box>
                                <Typography sx={{ color: '#083b78', fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.2, mb: 0.2 }}>
                                  {item.label}
                                </Typography>
                              </Box>
        
        
                              <ChevronRight sx={{ color: '#0a4f98', fontSize: 18 }} />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
        
        
                  </Box>
                )}

        {/* Resources */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} sx={{ '&:hover': { color: '#00aeef' } }}>
            <ListItemText primary="Resources" primaryTypographyProps={{ style: { color: 'white' } }} />
            {mobileResourcesOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
          </ListItemButton>
        </ListItem>
        {mobileResourcesOpen && (
          <List sx={{ pl: 2 }}>
            {[
              { label: 'Blogs', path: '/blog' },
              { label: 'Videos', path: '/videos' },
              { label: 'Case Studies', path: '/case-studies' },
              { label: 'Events', path: '/events' },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={handleDrawerToggle} sx={{ '&:hover .MuiListItemText-primary': { color: '#00aeef' }, pl: 2 }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ sx: { color: 'white', fontSize: '0.85em', textAlign: 'left' } }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/company/contact-us" onClick={handleDrawerToggle} sx={{ '&:hover': { color: '#00aeef' } }}>
            <ListItemText primary="Contact Us" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  const searchBox = (
    <Box
      ref={searchContainerRef}
      sx={{
        position: 'relative',
        width: isDesktop ? 200 : '100%',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSearchSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #9ec6ea',
          borderRadius: '999px',
          backgroundColor: '#ffffff',
          px: 1.25,
          py: 0.15,
        }}
      >
        <SearchIcon sx={{ color: '#0d5ca8', fontSize: 20, mr: 0.5 }} />
        <Box
          component="input"
          value={searchQuery}
          onChange={handleSearchInputChange}
          onFocus={() => setSearchOpen(true)}
          placeholder="Search"
          aria-label="Search site pages"
          sx={{
            width: '100%',
            border: 'none',
            outline: 'none',
            py: 0.75,
            backgroundColor: 'transparent',
            color: '#083b78',
            fontSize: '0.9rem',
          }}
        />
      </Box>

      {searchOpen && searchQuery.trim().length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            border: '1px solid #b7d3ed',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0, 56, 115, 0.18)',
            zIndex: 1300,
            maxHeight: 360,
            overflowY: 'auto',
          }}
        >
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <Box
                component="button"
                type="button"
                key={item.path}
                onClick={handleSearchResultClick}
                sx={{
                  width: '100%',
                  textAlign: 'left',
                  px: 1.5,
                  py: 1.2,
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #edf2f7',
                  cursor: 'pointer',
                  '&:last-of-type': {
                    borderBottom: 'none',
                  },
                  '&:hover': {
                    backgroundColor: '#f2f8ff',
                  },
                }}
              >
                <Typography sx={{ color: '#003873', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.25 }}>
                  {item.title}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography sx={{ px: 1.6, py: 1.4, color: '#4b6897', fontSize: '0.85rem' }}>
              No matching pages found.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
  
  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: "space-around" }}>
              
              <a href="https://www.e-consystems.com/">
                <img 
                  src={dentallogo} 
                  alt="Logo" 
                  style={{ 
                    height: isDesktop ? '65px' : '56px', 
                    width: isDesktop ? '240px' : 'auto', 
                    objectFit: 'contain',
                    margin: "5px",
                    cursor: 'pointer'
                  }} 
                />
              </a>

              {isDesktop && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <NavLink to="/">Home</NavLink>

                  {/* Products */}
                  <NavLink
                    {...(open && { 'aria-owns': 'products-menu' })}
                    aria-haspopup="true"
                    onMouseOver={handlePopoverOpen}
                  >
                    Products
                  </NavLink>

                  {/* NEW: Solutions */}
                  <NavLink
                    aria-haspopup="true"
                    onMouseOver={handleSolutionsPopoverOpen}
                  >
                    Solutions
                  </NavLink>

                  {/* Resources */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <NavLink
                      aria-haspopup="true"
                      onMouseOver={handleResourcesPopoverOpen}
                    >
                      Resources
                    </NavLink>
                  </Box>

                  <NavLink to="/company/contact-us">Contact Us</NavLink>
                </Box>
              )}

              {isDesktop ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {searchBox}
                  <PhoneIcon sx={{ color: '#003873', fontSize: '24px' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: '#00aeef', fontSize: '1em' }}>
                      Call us
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#003873', fontSize: '14px', whiteSpace: 'nowrap' }}>
                      +1 408 766 7503
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: '#003873' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>

          {!isDesktop && (
            <Box sx={{ px: 0.5, pb: 1.1 }}>
              {searchBox}
            </Box>
          )}
        </Container>

        {/* Products Popover */}
        <Popover
          id="products-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ 
            sx: {
              border: '1px solid #00aeef',
              fontFamily: `${NAV_FONT_FAMILY} !important`,
              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            },
            onMouseEnter: handlePopoverEnter,
            onMouseLeave: handlePopoverLeave
          }}
          disableRestoreFocus
        >
          {SolutionMenu}
        </Popover>

        {/* NEW: Solutions Popover */}
        <Popover
          id="solutions-menu"
          open={Boolean(anchorElSolutions)}
          anchorEl={anchorElSolutions}
          onClose={handleSolutionsPopoverClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            sx: {
              border: 'none',
              borderRadius: '5px',
              overflow: 'hidden',
              boxShadow: '0 14px 42px rgba(6, 59, 120, 0.2)',
              fontFamily: `${NAV_FONT_FAMILY} !important`,
              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            },
            onMouseEnter: () => clearTimeout(closeTimeoutRef.current),
onMouseLeave: handleSolutionsPopoverClose          }}
          disableRestoreFocus
        >
          {SolutionsMenu}
        </Popover>



        {/* Resources Popover */}
        <Popover
          open={Boolean(anchorElResources)}
          anchorEl={anchorElResources}
          onClose={handleResourcesPopoverClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          disableRestoreFocus
          PaperProps={{ 
            sx: {
              border: '1px solid #00aeef',
              fontFamily: `${NAV_FONT_FAMILY} !important`,
              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            },
            onMouseEnter: () => clearTimeout(closeTimeoutRef.current), 
            onMouseLeave: handleResourcesPopoverClose 
          }}
        >
          {ResourcesMenu}
        </Popover>
      </StyledAppBar>

      <StyledDrawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </StyledDrawer>
    </>
  );
};

export default NavBar;