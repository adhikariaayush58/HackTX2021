import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';


function Button1(variant){
return(
    
    <div className="container">
        <div className="row">
        
            <Button  variant="quinary" ><a href="https://outlook.live.com/owa/" target="_blank">Email</a></Button>{'  '}
            <Button  variant="quinary" ><a href="https://login.microsoftonline.com/5cdc5b43-d7be-4caa-8173-729e3b0a62d9/saml2?SAMLRequest=fZLLTsMwEEX3fEXkvfNsk8ZqK5VWiEoFqrawYIMcZwKWErt4bB5%2Fj5uAgAVsx3Pn3LnjKfKuPbKFs09qB88O0AZvXauQ9Q8z4oximqNEpngHyKxg%2B8XVhqVhzI5GWy10S35I%2FldwRDBWakWC9WpGHppY5FndTGhV8oKOkpLTyTivaAn5uOCNyEuYkOAODHrNjPgRXojoYK3QcmV9KU4TmsQ0Sw7xiGUFS9N7Eqz8HlJx26uerD0ii6JWP0oVdlIYjbqxWrVSQSh0F41FLcbVKKN1UQEdCe5tJEVGi7SErIp5ntZldNouJcHia4WlVug6MHswL1LA7W7zjXKWh9JbNE5YZwZIj%2B%2BnkGD7mdy5VLVUj%2F%2BHVg1NyC4Phy3d3uwPZD49zWF9FGZ%2Bov4B7U1Po5%2Fd0%2BHk156zXm11K8V7cKFNx%2B3fNpIw6Suypk3fypzCIwjZSKh9Jm2rX5cGuIUZ8Xwg0XyA%2Fv5a87MP&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=ulLhaHdILBdhor2LBewef3%2FbUatRNGQfXMxMx225xZZMaXQt%2B%2B4Nn1P6PY6O%2F8ntqa%2Bq9rWZXYLueGNIfWqEZnzo%2B8wB2h%2FWbojePrTlGYWVGocHDEBx1CNpOLixpe6Mv%2FynZ2CWgqfaGNDFAzh72uj7n6CUakc9zNzOxupCdmP2WJmRKpEFRTgZFFSyIxa6X6z%2BxZRBlOaPnA3fk3jp4JHUQz5jOCxfa%2FpqmaqWqhQki97ncb8PYrphde5KaXc%2FZAAIlLdbqKXgQR2YOJZzmbp62%2FtnLNJYvVIcZjyqavVPmFL%2FFvbYOCSvvGNladkR5BSOouE4Bmzr445jri7dBQ%3D%3D" target="_blank">Canvas</a></Button>{'  '}
            <Button  variant="quinary" ><a href="https://www.linkedin.com/in/adhikariaayush/" target="_blank">LinkedIn</a></Button>{'  '}
            <Button  variant="quinary" ><a href="https://github.com/adhikariaayush58" target="_blank">Github</a></Button>{'  '}
            <Button variant="quinary" ><a href="./projects" target="_blank">Projects</a></Button>{'  '}

        </div>
    </div>

);

}

export default Button1;