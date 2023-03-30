import React from "react";
import Layout from "../core/layout";
import { API } from "../config";
const Signin = ()=>{

    return(
        <Layout title="Sign In" description="Sign In Node React Ecommerce"> 
            {API}        
        </Layout>
    )
}

export default Signin