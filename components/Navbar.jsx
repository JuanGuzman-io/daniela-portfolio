import Link from "next/link";
import { BsListNested } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Button, } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <nav className='nav'>
                <div className='logo'>
                    <Link href={'/'}>
                        <span className='name'>Daniela Gómez</span>
                    </Link>
                    <span className='carrer'>Mechatronics Engineer</span>
                </div>
                <ul className='nav-links'>
                    <Link href={'#aboutme'}>
                        <li className='nav-item'>
                            About Me
                        </li>
                    </Link>
                    <Link href={'#education'}>
                        <li className='nav-item'>
                            Education
                        </li>
                    </Link>
                    <Link href={'#works'}>
                        <li className='nav-item'>
                            Works/Projects
                        </li>
                    </Link>
                    <Link href={'#contact'}>
                        <li className='nav-item'>
                            Contact
                        </li>
                    </Link>
                </ul>
                <ul className="cv-link">
                    <Link href={'#contact'}>
                        <Button
                            colorScheme={'blue'}
                            variant={'outline'}
                            alignSelf={'flex-end'}
                            size={'sm'}
                        >
                            Hire me
                        </Button>
                    </Link>
                </ul>
                <div className='dropdown'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<BsListNested />}
                            variant='ghots'
                        />
                        <MenuList>
                            <Link href={'#aboutme'}>
                                <MenuItem>About Me</MenuItem>
                            </Link>
                            <Link href={'#education'}>
                                <MenuItem>Education</MenuItem>
                            </Link>
                            <Link href={'#works'}>
                                <MenuItem>Works/Projects</MenuItem>
                            </Link>
                            <Link href={'#contact'}>
                                <MenuItem>Contact</MenuItem>
                            </Link>
                            <Link href={'#contact'}>
                                <MenuItem color={'pink.500'}>
                                    Hire Me
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;