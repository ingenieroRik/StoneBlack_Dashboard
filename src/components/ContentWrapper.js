import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import User from './User';
import Footer from './Footer';
import Products from './Products';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <User />
                    <Products/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;