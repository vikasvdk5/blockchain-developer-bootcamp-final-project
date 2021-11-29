import React, { useEffect, useState } from "react";
import Header from "./components/componentHeader";
import Listing from "./components/componentListing";
import AuctionListing from "./components/componentAuctionListing";
import Listings from "./components/componentListings";
import SignUpModal from "./components/componentCreateAccountModal";
import ContextContainer from "./functions/contextContainer";
import { Toaster } from "react-hot-toast";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'



const App: React.FC = () => {
    const { setContract } = ContextContainer.useContainer();

    

    function getLibrary(provider: any) {
        let webProvider = new Web3(provider);
        return webProvider;
    }


    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div className="rentonzilliqa">
                <Header />
                <div><Router>
                    <main>
                        <Switch>
                            <Route path="/" exact>
                                <Redirect to={"/listings"} />
                            </Route>
                            <Route path="/listings">
                                <Listings />
                            </Route>
                            <Route path="/listing/:id">
                                <Listing />
                            </Route>
                            <Redirect to={"/listings"} />
                        </Switch>
                    </main>
                </Router>
                <Toaster
                    toastOptions={{
                        success: { duration: 6000 },
                        error: { duration: 8000 },
                        loading: { duration: 130000 },
                    }}
                />
                </div> 
            </div>
        </Web3ReactProvider>
    );
};

export default App;
