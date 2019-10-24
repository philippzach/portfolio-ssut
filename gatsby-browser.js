/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 const scrollToElement = require('scroll-to-element')
 
 exports.onRouteUpdate = ({ location }) => {
   checkHash(location)
 }
 
 const checkHash = location => {
   let hash = location.hash
   if (hash) {
     scrollToElement(hash, {
       offset: 0,
       duration: 1000,
     })
   }
 }

 
 const anchorate = require('anchorate')
 
 exports.onRouteUpdate = () => {
   anchorate()
 }
 */

// You can delete this file if you're not using it
