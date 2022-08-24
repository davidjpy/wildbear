import { Fragment, useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftMeun = ({ leftMenuRef, location }) => {

    const navigate = useNavigate();
    const url = location.pathname
    const urlSuffix = '/page=1'
    const menuOptions = useMemo(() => 
        [
            {
                title: 'EXPLORE',
                subTitle: [{ header: 'All Categories', nav: `all${urlSuffix}` }]
            },
            {
                title: 'SHELTERS',
                subTitle: [
                    { header: 'Tents', nav: `tents${urlSuffix}` },
                    { header: 'Sleeping Bags', nav: `sleeping-bags-and-accessories${urlSuffix}` },
                    { header: 'Furniture', nav: `camp-furniture${urlSuffix}` },
                    { header: 'Kitchen', nav: `camp-kitchen${urlSuffix}` }
                ]
            },
            {
                title: 'WEARS',
                subTitle: [
                    { header: 'Clouthes', nav: `hiking-clothing${urlSuffix}` },
                    { header: 'Footwears', nav: `hiking-footwear${urlSuffix}` },
                    { header: 'Backpacks', nav: `hiking-backpacks${urlSuffix}` }
                ]
            },
            {
                title: 'TOOLS & NECESSITIES',
                subTitle: [
                    { header: 'Gadgets', nav: `gadgets${urlSuffix}` },
                    { header: 'Treatment', nav: `water-bottles-and-treatment${urlSuffix}` }
                ]
            }
        ], []);

    const [active, setActive] = useState('All Categories');

    const handleSetActive = (nav) => {
        navigate(`/products/${nav}`);
    }

    const handleUpdateActive = useCallback(() => {
        const targetUrl = url.substring(url.indexOf('/', 1) + 1, url.lastIndexOf('/')) + urlSuffix;
        const parent = menuOptions.find(item => item.subTitle.find(subItem => subItem.nav === targetUrl));
        const target = parent.subTitle.find(item => item.nav === targetUrl);

        setActive(target.header);
    }, [menuOptions, url]);

    useEffect(() => {
        handleUpdateActive();
    }, [location, handleUpdateActive]);

    return (
        <div ref={leftMenuRef} className='leftmenu'>
            <div className='leftmenu__wrapper'>
                <div className='leftmenu__header'>
                    <h5 className='leftmenu__text leftmenu__text--title'>CATEGORIES</h5>
                </div>
                <div className='leftmenu__body'>
                    {menuOptions.map((item) => {
                        return (
                            <Fragment key={item.title}>
                                <p className='leftmenu__text leftmenu__text--subtitle'>{item.title}</p>
                                {item.subTitle.map((subItem) => {
                                    return (
                                        <p key={subItem.header} onClick={() => handleSetActive(subItem.nav)}
                                            className={active === subItem.header
                                                ? 'leftmenu__text leftmenu__text--body leftmenu__text--active'
                                                : 'leftmenu__text leftmenu__text--body'}>
                                            {subItem.header}
                                        </p>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default LeftMeun;