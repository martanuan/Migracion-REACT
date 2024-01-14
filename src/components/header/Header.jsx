import React from 'react';

const Header = (props) => {
  const { logoSrc, menuItems } = props;

  return (
    <header>
      <img className="mainlogo" src={logoSrc} alt="mainlogo" />
      <nav id="menu">
        <ul className="mainmenu">
          {menuItems.map((item, index) => (
             <li key={index} className={item.label === 'DOWNLOAD' ? 'downloaditem' : ''}>
              <a href={item.link}>{item.label}</a>
              {item.submenu && (
                <ul className="submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="submenuopt">
                      <a href={subItem.link}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;