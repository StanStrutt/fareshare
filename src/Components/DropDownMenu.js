import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDownMenu.css';

function  DropDownMenu() {
  // State to manage the open/close status of multiple dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle the dropdown based on its name
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="fsnavbar">
      <ul className="fsnavbar-links">
        {/* Services Dropdown */}
        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('What we do')} className="fsdropdown-toggle">
            What we do <span></span>
          </button>
          {openDropdown === 'What we do' && (
            <ul className="fsdropdown-menu">
              <li className='wwd'><Link to="/What-we-do">What we do</Link></li>
              <li className='wwd'><Link to="/What-we-do/our-impact">Our impact</Link></li>
              <li className='wwd'><Link to="/Pages/Food-waste-and-hunger">Food waste and hunger</Link></li>
              <li className='wwd'><Link to="/Pages/Annual reports">Annual reports</Link></li>
            </ul>
          )}
        </li>

        {/* Products Dropdown */}
        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('Give food')} className="fsdropdown-toggle">
            Give food <span></span>
          </button>
          {openDropdown === 'Give food' && (
            <ul className="fsdropdown-menu">
              <li className='gif'><Link to="/Pages/GiveFood">Give food</Link></li>
              <li className='gif'><Link to="/Pages/Why work with us?">Why work with us?</Link></li>
              <li className='gif'><Link to="/Pages/Surplus with Purpose">Surplus with Purpose</Link></li>
              <li className='gif'><Link to="/Pages/Who we work with">Who we work with</Link></li>
              <li className='gif'><Link to="/Pages/How we look after your food">How we look after your food</Link></li>
              <li className='gif'><Link to="/Pages/Best before dates policy">Best before dates policy</Link></li>
              <li className='gif'><Link to="/Pages/Retailer and brand authorisations">Retailer and brand authorisations</Link></li>
              <li className='gif'><Link to="/Pages/Food life extension project">Food life extension project</Link></li>
              <li className='gif'><Link to="/Pages/Book a waste walk">Book a waste walk</Link></li>
              <li className='gif'><Link to="/Pages/FAQs">FAQs</Link></li>
            </ul>
          )}
        </li>

        {/* Support Dropdown */}
        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('Get food')} className="fsdropdown-toggle">
            Get food <span></span>
          </button>
          {openDropdown === 'Get food' && (
            <ul className="fsdropdown-menu">
              <li className='gef'><Link to="/Pages/Get food">Get food</Link></li>
              <li className='gef'><Link to="/Pages/Recipe ideas">Recipe ideas</Link></li>
              <li className='gef'><Link to="/Pages/Allergen information">Allergen information</Link></li>
            </ul>
          )}
        </li>

        {/* Additional Dropdowns */}
        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('Get involved')} className="fsdropdown-toggle">
            Get involved <span></span>
          </button>
          {openDropdown === 'Get involved' && (
            <ul className="fsdropdown-menu">
              <li className='gi'><Link to="/Pages/Get involved">Get involved</Link></li>
              <li className='gi'><Link to="/category4/item2">Volunteer</Link></li>
              <li className='gi'><Link to="/category4/item1">Donate</Link></li>
              <li className='gi'><Link to="/category4/item2">Write to your MP</Link></li>
              <li className='gi'><Link to="/category4/item1">Fundraiser for FareShare</Link></li>
              <li className='gi'><Link to="/category4/item2">Other ways to give</Link></li>
              <li className='gi'><Link to="/category4/item1">Corporate Partnerships</Link></li>
              <li className='gi'><Link to="/category4/item2">Trusts and grants</Link></li>
              <li className='gi'><Link to="/category4/item1">Major giving</Link></li>
              <li className='gi'><Link to="/category4/item2">Tesco Food Collection</Link></li>
            </ul>
          )}
        </li>

        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('News & media')} className="fsdropdown-toggle">
            News & media <span></span>
          </button>
          {openDropdown === 'News & media' && (
            <ul className="fsdropdown-menu">
              <li className='nm'><Link to="/category5/item1">Media centre</Link></li>
              <li className='nm'><Link to="/category5/item2">News</Link></li>
              <li className='nm'><Link to="/category5/item2">Press releases</Link></li>
              <li className='nm'><Link to="/category5/item2">Case studies</Link></li>
              <li className='nm'><Link to="/category5/item2">Subscribe to FareShare Bites</Link></li>
            </ul>
          )}
        </li>

        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('About us')} className="fsdropdown-toggle">
            About us <span></span>
          </button>
          {openDropdown === 'About us' && (
            <ul className="fsdropdown-menu">
              <li className='au'><Link to="/category6/item1">Careers</Link></li>
              <li className='au'><Link to="/category6/item2">Our history</Link></li>
              <li className='au'><Link to="/category6/item1">Our people</Link></li>
              <li className='au'><Link to="/category6/item2">Marcus Rashford</Link></li>
              <li className='au'><Link to="/category6/item1">Contact us</Link></li>
              <li className='au'><Link to="/category6/item2">Locations</Link></li>
              <li className='au'><Link to="/category6/item1">Public Affairs</Link></li>
              <li className='au'><Link to="/category6/item2">Parliamentary supporters</Link></li>
            </ul>
          )}
        </li>

        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('Get support')} className="fsdropdown-toggle">
            Get support <span></span>
          </button>
          {openDropdown === 'Get support' && (
            <ul className="fsdropdown-menu">
              <li className='gs'><Link to="/category7/item1">Get support</Link></li>
            </ul>
          )}
        </li>

        <li className="fsdropdown">
          <button onClick={() => toggleDropdown('Coronation Food Project')} className="fsdropdown-toggle">
          Coronation Food Project <span></span>
          </button>
          {openDropdown === 'Coronation Food Project' && (
            <ul className="fsdropdown-menu">
              <li className='cfp'><Link to="/category8/item1">Find out more</Link></li>
              <li className='cfp'><Link to="/category8/item2">Get involved</Link></li>
            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
}

export default DropDownMenu;