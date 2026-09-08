import React, { useState, useRef, useEffect } from 'react';
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
  Popover,
  Popper,
  MenuItem,
  Box,
  styled,
} from '@mui/material';


import {
  ExpandLess,
  ExpandMore,
  ChevronRight,
  Speed,
  Traffic,
  LocalParkingOutlined,
} from '@mui/icons-material';


import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';


import { Link, useNavigate } from 'react-router-dom';
import dentallogo from "../../assets/homepage/footerlogo-1.svg";


const NAV_FONT_FAMILY = '"Poppins", sans-serif';


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
  const [anchorElIndustries, setAnchorElIndustries] = useState(null);
  const [anchorElResources, setAnchorElResources] = useState(null);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [anchorElParking, setAnchorElParking] = useState(null);


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileParkingOpen, setMobileParkingOpen] = useState(false);


  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);


  const isDesktop = useMediaQuery('(min-width:1024px)');


  const closeTimeoutRef = useRef(null);
  const parkingCloseTimeoutRef = useRef(null);


  const navigate = useNavigate();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  // --------------------------------------------------
  // PRODUCTS
  // --------------------------------------------------


  const handlePopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorEl(event.currentTarget);
  };


  const handlePopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 100);
  };


  const handlePopoverEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    if (!open) {
      setAnchorEl(anchorEl);
    }
  };


  // --------------------------------------------------
  // INDUSTRIES
  // --------------------------------------------------


  const handleIndustriesPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElIndustries(event.currentTarget);
  };


  const handleIndustriesPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElIndustries(null);
    }, 100);
  };


  // --------------------------------------------------
  // RESOURCES
  // --------------------------------------------------


  const handleResourcesPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElResources(event.currentTarget);
  };


  const handleResourcesPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElResources(null);
    }, 100);
  };


  // --------------------------------------------------
  // SOLUTIONS
  // --------------------------------------------------


  const handleSolutionsPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElSolutions(event.currentTarget);
  };


  const handleSolutionsPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      if (anchorElParking) {
        return;
      }


      setAnchorElSolutions(null);
    }, 100);
  };


  // --------------------------------------------------
  // SMART PARKING SUBMENU
  // --------------------------------------------------


  const handleParkingPopoverOpen = (event) => {
    clearTimeout(parkingCloseTimeoutRef.current);
    setAnchorElParking(event.currentTarget);
  };


  const handleParkingPopoverClose = () => {
    parkingCloseTimeoutRef.current = setTimeout(() => {
      setAnchorElParking(null);
    }, 150);
  };


  // --------------------------------------------------
  // CLOSE SOLUTIONS
  // --------------------------------------------------


  const handleSolutionsItemClick = () => {
    clearTimeout(closeTimeoutRef.current);
    clearTimeout(parkingCloseTimeoutRef.current);


    setAnchorElSolutions(null);
    setAnchorElParking(null);


    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileParkingOpen(false);
  };


  // --------------------------------------------------
  // RESET MOBILE MENUS
  // --------------------------------------------------


  useEffect(() => {
    if (!mobileOpen) {
      setMobileMenuOpen(false);
      setMobileIndustriesOpen(false);
      setMobileResourcesOpen(false);
      setMobileSolutionsOpen(false);
      setMobileParkingOpen(false);
    }
  }, [mobileOpen]);


  // --------------------------------------------------
  // OTHER POPOVER LEAVE
  // --------------------------------------------------


  const handlePopoverLeave = () => {
    setAnchorEl(null);
    setAnchorElIndustries(null);
    setAnchorElResources(null);
  };


  // --------------------------------------------------
  // STATE
  // --------------------------------------------------


  const open = Boolean(anchorEl);


  const trafficEnforcementParent = {
    label: 'Traffic Enforcement Camera',
    path: '/solutions/traffic-enforcement-camera',
  };


  const trafficEnforcementChildren = [
    {
      label: 'Speed Enforcement Camera',
      path: '/solutions/speed-enforcement-camera',
      icon: Speed,
    },
    {
      label: 'Red Light Violation Detection Camera',
      path: '/solutions/red-light-violation-detection-camera',
      icon: Traffic,
    },
    {
      label: 'Smart Parking Management',
      path: '/solutions/smart-parking-management',
      icon: LocalParkingOutlined,
      children: [
        {
          label: 'Parking Access Control',
          path: '/solutions/parking-access-control-camera',
        },
        {
          label: 'Occupancy Detection',
          path: '/solutions/parking-occupancy-detection-camera',
        },
        {
          label: 'Parking Enforcement',
          path: '/solutions/parking-enforcement-camera',
        },
        
      ],
    },
  ];


  // --------------------------------------------------
  // MENU STYLES
  // --------------------------------------------------


  const menuItemStyles = {
    '& .MuiMenuItem-root': {
      color: '#344ea1',
      fontSize: '1em',
      transition: 'all 0.2s ease-in-out',


      '&:hover': {
        backgroundColor: '#00aeef',
        color: 'white',
      },
    },
  };


  // --------------------------------------------------
  // PRODUCT MENU
  // --------------------------------------------------


  const SolutionMenu = (
    <Box
      sx={{
        p: 1,
        width: 300,
        ...menuItemStyles,
      }}
    >
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


  // --------------------------------------------------
  // INDUSTRIES MENU
  // --------------------------------------------------


  const IndustriesMenu = (
    <Box
      sx={{
        p: 1,
        width: 300,
        ...menuItemStyles,
      }}
    >
      <MenuItem
        component={Link}
        to="/smart-cities"
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        Smart Cities
      </MenuItem>


      <MenuItem
        component={Link}
        to="/traffic-management"
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        Traffic Management
      </MenuItem>


      <MenuItem
        component={Link}
        to="/tolling-&-highway-infrastructure"
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        Tolling & Highway Infrastructure
      </MenuItem>


      <MenuItem
        component={Link}
        to="/parking-lot-management"
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        Parking Lot Management
      </MenuItem>


      <MenuItem
        component={Link}
        to="/public-safety-&-law-enforcement"
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        Public safety & law enforcement
      </MenuItem>
    </Box>
  );


  // --------------------------------------------------
  // RESOURCES MENU
  // --------------------------------------------------


  const ResourcesMenu = (
    <Box
      sx={{
        p: 1,
        width: 250,
        ...menuItemStyles,
      }}
    >
      <MenuItem
        component={Link}
        to="/blog"
        onClick={handleResourcesPopoverClose}
      >
        Blogs
      </MenuItem>


      <MenuItem
        component={Link}
        to="/case-study"
        onClick={handleResourcesPopoverClose}
      >
        Case Study
      </MenuItem>
    </Box>
  );


  // --------------------------------------------------
  // SOLUTIONS MENU
  // --------------------------------------------------


  const SolutionsMenu = (
    <Box
      sx={{
        width: {
          xs: 'calc(100vw - 24px)',
          sm: 400,
        },
        maxWidth: 400,
        border: '1px solid #9ec6ea',
        borderRadius: '5px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        position: 'relative',
      }}
    >
      {/* Traffic Enforcement Parent */}
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
        <Typography
          sx={{
            fontSize: {
              xs: '0.94rem',
              sm: '0.98rem',
            },
            fontWeight: 500,
            lineHeight: 1.25,
            color: '#083b78',
          }}
        >
          {trafficEnforcementParent.label}
        </Typography>
      </Box>


      {/* Traffic Enforcement Children */}
      <Box
        sx={{
          px: {
            xs: 1.1,
            sm: 1.25,
          },
          py: {
            xs: 1.2,
            sm: 1.25,
          },
          backgroundColor: '#ffffff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: {
              xs: 0.5,
              sm: 0.5,
            },
          }}
        >
          {trafficEnforcementChildren.map((item) => {
            const ItemIcon = item.icon;
            const hasChildren = Boolean(item.children);


            return (
              <Box
                key={item.path}
                onClick={() => {
                  clearTimeout(closeTimeoutRef.current);
                  clearTimeout(parkingCloseTimeoutRef.current);


                  setAnchorElSolutions(null);
                  setAnchorElParking(null);


                  navigate(item.path);
                }}
                onMouseEnter={
                  hasChildren
                    ? handleParkingPopoverOpen
                    : handleParkingPopoverClose
                }
                sx={{
                  textDecoration: 'none',
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '52px 1fr 16px',
                    sm: '62px 1fr 18px',
                  },
                  alignItems: 'center',
                  columnGap: {
                    xs: 0.75,
                    sm: 0.75,
                  },
                  borderRadius: 2,
                  p: {
                    xs: 0.5,
                    sm: 0.5,
                  },
                  transition: 'background-color 0.2s ease',
                  cursor: 'pointer',


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
                    background:
                      'linear-gradient(180deg, #f1f5fb, #e8eef7)',
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


                <ChevronRight
                  sx={{
                    color: '#0a4f98',
                    fontSize: {
                      xs: 18,
                      sm: 18,
                    },
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );


  // --------------------------------------------------
  // MOBILE DRAWER
  // --------------------------------------------------


  const drawerContent = (
    <>
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Menu
        </Typography>


        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Box>


      <List sx={{ p: 1 }}>
        {/* Home */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                color: '#00aeef',
              },
            }}
          >
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                style: {
                  color: 'white',
                },
              }}
            />
          </ListItemButton>
        </ListItem>


        {/* Products */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{
              '&:hover': {
                color: '#00aeef',
              },
            }}
          >
            <ListItemText
              primary="Products"
              primaryTypographyProps={{
                style: {
                  color: 'white',
                },
              }}
            />


            {mobileMenuOpen ? (
              <ExpandLess sx={{ color: 'white' }} />
            ) : (
              <ExpandMore sx={{ color: 'white' }} />
            )}
          </ListItemButton>
        </ListItem>


        {mobileMenuOpen && (
          <List sx={{ pl: 2 }}>
            {[
              {
                label: 'ALPR Cameras',
                path: '/products/anpr-alpr-bullet-cameras',
              },
              {
                label: 'AI Vision Box',
                path: '/products/ai-vision-box',
              },
              {
                label: 'ALPR SDK',
                path: '/products/license-plate-recognition-software',
              },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    '&:hover .MuiListItemText-primary': {
                      color: '#00aeef',
                    },
                    pl: 2,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        color: 'white',
                        fontSize: '0.85em',
                        textAlign: 'left',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}


              {/* NEW: Solutions (Mobile) */}

        <ListItem disablePadding>
          <ListItemButton
            onClick={() =>
              setMobileSolutionsOpen(!mobileSolutionsOpen)
            }
            sx={{
              '&:hover': {
                color: '#00aeef',
              },
            }}
          >
            <ListItemText
              primary="Solutions"
              primaryTypographyProps={{
                style: {
                  color: 'white',
                },
              }}
            />


            {mobileSolutionsOpen ? (
              <ExpandLess sx={{ color: 'white' }} />
            ) : (
              <ExpandMore sx={{ color: 'white' }} />
            )}
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
            {/* Traffic Enforcement Parent */}
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
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.65,
                }}
              >
                {trafficEnforcementChildren.map((item) => {
                  const ItemIcon = item.icon;
                  const hasChildren = Boolean(item.children);


                  return (
                    <React.Fragment key={`mobile-${item.path}`}>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: hasChildren
                            ? '46px 1fr 32px'
                            : '46px 1fr 16px',
                          alignItems: 'center',
                          columnGap: 1,
                          borderRadius: 2,


                          '&:hover': {
                            backgroundColor: '#f3f9ff',
                          },
                        }}
                      >
                        {/* Icon + Label navigation */}
                        <Box
                          component={Link}
                          to={item.path}
                          key={`mobile-${item.path}`}
                          onClick={handleSolutionsItemClick}
                          sx={{
                            textDecoration: 'none',
                            display: 'grid',
                            gridTemplateColumns: '40px 1fr',
                            alignItems: 'center',
                            columnGap: 1,
                            gridColumn: '1 / 3',
                            p: 0.6,
                            borderRadius: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '10px',
                              background:
                                'linear-gradient(180deg, #f1f5fb, #e8eef7)',
                              display: 'grid',
                              placeItems: 'center',
                              color: '#0a4c96',
                              border: '1px solid #e2e9f2',
                              flexShrink: 0,
                            }}
                          >
                            <ItemIcon sx={{ fontSize: 24 }} />
                          </Box>


                          <Typography
                            sx={{
                              color: '#083b78',
                              fontSize: '0.9rem',
                              fontWeight: 400,
                              lineHeight: 1.2,
                            }}
                          >
                            {item.label}
                          </Typography>
                        </Box>


                        {/* Mobile submenu toggle */}
                        {hasChildren ? (
                          <IconButton
                            size="small"
                            aria-label={
                              mobileParkingOpen
                                ? 'Collapse submenu'
                                : 'Expand submenu'
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();


                              setMobileParkingOpen(
                                !mobileParkingOpen
                              );
                            }}
                            sx={{
                              justifySelf: 'end',
                            }}
                          >
                            {mobileParkingOpen ? (
                              <ExpandLess
                                sx={{
                                  color: '#0a4f98',
                                  fontSize: 18,
                                }}
                              />
                            ) : (
                              <ExpandMore
                                sx={{
                                  color: '#0a4f98',
                                  fontSize: 18,
                                }}
                              />
                            )}
                          </IconButton>
                        ) : (
                          <ChevronRight
                            sx={{
                              color: '#0a4f98',
                              fontSize: 18,
                              justifySelf: 'end',
                            }}
                          />
                        )}
                      </Box>


                      {/* Mobile Parking Children */}
                      {hasChildren && mobileParkingOpen && (
                        <Box
                          sx={{
                            pl: 6,
                            pr: 1,
                            pb: 0.8,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.3,
                          }}
                        >
                          {item.children.map((sub) => (
                            <ListItemButton
                              key={sub.path}
                              component={Link}
                              to={sub.path}
                              onClick={handleSolutionsItemClick}
                              sx={{
                                py: 0.5,
                                minHeight: 'auto',


                                '&:hover .MuiListItemText-primary': {
                                  color: '#00aeef',
                                },
                              }}
                            >
                              <ListItemText
                                primary={sub.label}
                                primaryTypographyProps={{
                                  sx: {
                                    color: '#083b78',
                                    fontSize: '0.82em',
                                  },
                                }}
                              />
                            </ListItemButton>
                          ))}
                        </Box>
                      )}
                    </React.Fragment>
                  );
                })}
              </Box>
            </Box>
          </Box>
        )}


        {/* Resources */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() =>
              setMobileResourcesOpen(!mobileResourcesOpen)
            }
            sx={{
              '&:hover': {
                color: '#00aeef',
              },
            }}
          >
            <ListItemText
              primary="Resources"
              primaryTypographyProps={{
                style: {
                  color: 'white',
                },
              }}
            />


            {mobileResourcesOpen ? (
              <ExpandLess sx={{ color: 'white' }} />
            ) : (
              <ExpandMore sx={{ color: 'white' }} />
            )}
          </ListItemButton>
        </ListItem>


        {mobileResourcesOpen && (
          <List sx={{ pl: 2 }}>
            {[
              {
                label: 'Blogs',
                path: '/blog',
              },
              {
                label: 'Case Study',
                path: '/case-study',
              },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    '&:hover .MuiListItemText-primary': {
                      color: '#00aeef',
                    },
                    pl: 2,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        color: 'white',
                        fontSize: '0.85em',
                        textAlign: 'left',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}


        {/* Contact Us */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/company/contact-us"
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                color: '#00aeef',
              },
            }}
          >
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{
                style: {
                  color: 'white',
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );


  // --------------------------------------------------
  // RETURN
  // --------------------------------------------------


  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              {/* LOGO */}
              <a href="https://www.e-consystems.com/">
                <img
                  src={dentallogo}
                  alt="Logo"
                  style={{
                    height: isDesktop ? '65px' : '56px',
                    width: isDesktop ? '240px' : 'auto',
                    objectFit: 'contain',
                    margin: '5px',
                    cursor: 'pointer',
                  }}
                />
              </a>


              {/* DESKTOP NAVIGATION */}
              {isDesktop && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                  }}
                >
                  <NavLink to="/">Home</NavLink>


                  {/* Products */}
                  <NavLink
                    {...(open && {
                      'aria-owns': 'products-menu',
                    })}
                    aria-haspopup="true"
                    onMouseOver={handlePopoverOpen}
                  >
                    Products
                  </NavLink>


                  {/* Solutions */}
                  <NavLink
                    aria-haspopup="true"
                    onMouseOver={handleSolutionsPopoverOpen}
                  >
                    Solutions
                  </NavLink>


                  {/* Resources */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <NavLink
                      aria-haspopup="true"
                      onMouseOver={handleResourcesPopoverOpen}
                    >
                      Resources
                    </NavLink>
                  </Box>


                  <NavLink to="/company/contact-us">
                    Contact Us
                  </NavLink>
                </Box>
              )}


              {/* PHONE / MOBILE */}
              {isDesktop ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <PhoneIcon
                    sx={{
                      color: '#003873',
                      fontSize: '24px',
                    }}
                  />


                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#00aeef',
                        fontSize: '1em',
                      }}
                    >
                      Call us
                    </Typography>


                    <Typography
                      variant="body2"
                      sx={{
                        color: '#003873',
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                      }}
                    >
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
                  sx={{
                    color: '#003873',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>


        {/* PRODUCTS POPOVER */}
        <Popover
          id="products-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              border: '1px solid #00aeef',
              fontFamily: `${NAV_FONT_FAMILY} !important`,
              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            },


            onMouseEnter: handlePopoverEnter,
            onMouseLeave: handlePopoverLeave,
          }}
          disableRestoreFocus
        >
          {SolutionMenu}
        </Popover>


        {/* SOLUTIONS POPOVER */}
        <Popover
          id="solutions-menu"
          open={Boolean(anchorElSolutions)}
          anchorEl={anchorElSolutions}
          onClose={handleSolutionsPopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              border: 'none',
              borderRadius: '5px',
              overflow: 'hidden',
              boxShadow:
                '0 14px 42px rgba(6, 59, 120, 0.2)',
              fontFamily: `${NAV_FONT_FAMILY} !important`,


              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            },


            onMouseEnter: () => {
              clearTimeout(closeTimeoutRef.current);
              clearTimeout(parkingCloseTimeoutRef.current);
            },


            onMouseLeave: handleSolutionsPopoverClose,
          }}
          disableRestoreFocus
        >
          {SolutionsMenu}
        </Popover>


        {/* =================================================
            SMART PARKING SUBMENU
            IMPORTANT: Popper instead of Popover
           ================================================= */}
        <Popper
          id="parking-submenu"
          open={Boolean(anchorElParking)}
          anchorEl={anchorElParking}
          placement="right-start"
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 0],
              },
            },
          ]}
          sx={{
            zIndex: 1400,
          }}
          onMouseEnter={() => {
            clearTimeout(parkingCloseTimeoutRef.current);
            clearTimeout(closeTimeoutRef.current);
          }}
          onMouseLeave={handleParkingPopoverClose}
        >
          <Box
            sx={{
              border: '1px solid #00aeef',
              borderRadius: '5px',
              backgroundColor: '#ffffff',
              boxShadow:
                '0 14px 42px rgba(6, 59, 120, 0.2)',
              fontFamily: `${NAV_FONT_FAMILY} !important`,


              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            }}
          >
            <Box
              sx={{
                p: 1,
                width: 260,
                ...menuItemStyles,
              }}
            >
              <MenuItem
                component={Link}
                to="/solutions/parking-access-control-camera"
                onClick={handleSolutionsItemClick}
              >
                Parking Access Control
              </MenuItem>
  <MenuItem
                component={Link}
                to="/solutions/parking-occupancy-detection-camera"
                onClick={handleSolutionsItemClick}
              >
               Occupancy Detection
              </MenuItem>

              <MenuItem
                component={Link}
                to="/solutions/parking-enforcement-camera"
                onClick={handleSolutionsItemClick}
              >
                Parking Enforcement
              </MenuItem>


            
            </Box>
          </Box>
        </Popper>


        {/* RESOURCES POPOVER */}
        <Popover
          open={Boolean(anchorElResources)}
          anchorEl={anchorElResources}
          onClose={handleResourcesPopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          disableRestoreFocus
          PaperProps={{
            sx: {
              border: '1px solid #00aeef',
              fontFamily: `${NAV_FONT_FAMILY} !important`,


              '& *': {
                fontFamily: `${NAV_FONT_FAMILY} !important`,
              },
            },


            onMouseEnter: () =>
              clearTimeout(closeTimeoutRef.current),


            onMouseLeave: handleResourcesPopoverClose,
          }}
        >
          {ResourcesMenu}
        </Popover>
      </StyledAppBar>


      {/* MOBILE DRAWER */}
      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </StyledDrawer>
    </>
  );
};


export default NavBar;
    
