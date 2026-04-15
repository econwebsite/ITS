import React, { useState,useRef,useEffect } from 'react';
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
  MenuItem,
  Box,
  styled
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import dentallogo from "../../assets/homepage/footerlogo-1.svg";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f1f2f2',
  boxShadow: '0 4px 30px rgba(121, 116, 116, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#003873',
  fontFamily: '"Montserrat", sans-serif',
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
  },
}));

const NavBar = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [anchorElIndustries, setAnchorElIndustries] = useState(null);
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const closeTimeoutRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [anchorElResources, setAnchorElResources] = useState(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // --- NEW: Solutions state ---
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handlePopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
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
    }
  }, [mobileOpen]);

  const handlePopoverLeave = () => {
    setAnchorEl(null);
    setAnchorElIndustries(null);
    setAnchorElResources(null);
    setAnchorElSolutions(null); // close solutions too
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

  const open = Boolean(anchorEl);
  const openIndustries = Boolean(anchorElIndustries);

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
        component={Link} 
        to="/products/anpr-alpr-bullet-cameras" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        ALPR Cameras
      </MenuItem>
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
      <MenuItem component={Link} to="/case-study" onClick={handleResourcesPopoverClose}>
        Case Study
      </MenuItem>
    </Box>
  );

  // --- NEW: Solutions Menu ---
  const SolutionsMenu = (
    <Box sx={{ p: 1, width: 280, ...menuItemStyles }}>
      <MenuItem
        component={Link}
        to="/solutions/traffic-enforcement-camera"
        onClick={() => {
          handleSolutionsPopoverClose();
          setMobileOpen(false);
        }}
      >
        Traffic Enforcement Camera
      </MenuItem>
      <MenuItem
        component={Link}
        to="/solutions/speed-enforcement-camera"
        onClick={() => {
          handleSolutionsPopoverClose();
          setMobileOpen(false);
        }}
      >
        Speed Enforcement Camera
      </MenuItem>
       <MenuItem
        component={Link}
        to="/solutions/red-light-violation-detection-camera"
        onClick={() => {
          handleSolutionsPopoverClose();
          setMobileOpen(false);
        }}
      >
       Red Light Violation Detection Camera
      </MenuItem>
        <MenuItem
        component={Link}
        to="/solutions/school-bus-stop-arm-camera"
        onClick={() => {
          handleSolutionsPopoverClose();
          setMobileOpen(false);
        }}
      >
       School Bus Stop Arm Camera
      </MenuItem>
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
            {[
              { label: 'ALPR Cameras', path: '/products/anpr-alpr-bullet-cameras' },
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
          <List sx={{ pl: 2 }}>
            {[
              { label: 'Traffic Enforcement Camera', path: '/solutions/traffic-enforcement' },
              { label: 'Speed Enforcement Camera', path: '/solutions/speed-enforcement' },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={handleDrawerToggle} sx={{ '&:hover .MuiListItemText-primary': { color: '#00aeef' }, pl: 2 }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ sx: { color: 'white', fontSize: '0.85em', textAlign: 'left' } }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
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
              { label: 'Case Study', path: '/case-study' },
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
            sx: { border: '1px solid #00aeef' },
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
            sx: { border: '1px solid #00aeef' },
            onMouseEnter: () => clearTimeout(closeTimeoutRef.current),
            onMouseLeave: handlePopoverLeave
          }}
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
            sx: { border: '1px solid #00aeef' },
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