## Setup Gatsby

In your `.env` file put:

`ENABLE_GATSBY_REFRESH_ENDPOINT=true`

https://www.gatsbyjs.com/docs/refreshing-content/

## Setup the tunnel

`ssh -R :44244:localhost:44444 ec`

`ssh -R :public_port:localhost:this_app_port'
