import React,{useEffect,useState} from 'react'
import ContributorInfo from '../components/contributorInfo'
import ApiInfo from '../components/apiInfo'
const FakeStoreAPI = () => {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>console.log(json))
       
    }, [])
    return (
        <div>
          <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">The Fake store API</h1>
            <h1 className="text-2xl font-medium pb-6">Best api to create e-commerce project with CRUD operations where we will be getting following data from the fake store api:</h1>
            <ul>
                <li>1.Categories available </li>
                <li>2.Products in each Category</li>
                <li>3.Product details </li>
            </ul>
            <p>This is a small ecommerce site which is done using fakestore api (includes all basic  redux functionalities ) -
                <a style={{color:"blue"}} href="https://github.com/Rehasree/MINICART" target="_blank">Click here</a>
            </p>
            <ContributorInfo
                username="Rehasree"
                profilePic="data:image/jpeg;base64,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"
            />
            <ApiInfo apiUrl="https://fakestoreapi.com/" apiName="FAKESTOREAPI" />
         </div>  
        </div>
    )
}

export default FakeStoreAPI
