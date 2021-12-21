import React, {useState} from 'react'
import data from "../data/footer"
import { FaGlobe } from 'react-icons/fa'

const Footer = () => {
  const [links, setLinks] =useState(data)

    return (
        <>
        <footer className="xl:mx-20 bg-gray-200 px-8 py-4 md:grid md:grid-cols-2 xl:grid-cols-6">
            {links?.map((link)=>{
                const {id, title, hrefs} = link

                return(
                    <div key={id}>
                        <div className="mb-10">
                      <h4 className="font-semibold text-gray-600">{title}</h4>
                      {hrefs?.map((href) => {
                        return  <li key={hrefs}
                        className="text-gray-600 text-sm my-2">
                            {href}
                          </li>
                      })}
                      </div>
                    </div>
                )
            })}
             </footer>

         <div className= "xl:px-20 bg-gray-200 px-8 py-4b md:flex items-center justify-between">
          <div className="flex item-center text-gray-600">
              <FaGlobe className="mr-3"/>
              <p className="text-sm">English (United States)</p>
          </div>

          <div>
              <ul className=" flex flex-wrap text-sm mt-4 text-gray-600">
                  <li className="mr-2">Sitemap</li>
                  <li className="mr-2">Contact Microsoft</li>
                  <li className="mr-2">Privacy</li>
                  <li className="mr-2">Terms of Use</li>
                  <li className="mr-2">Trademarks</li>
                  <li className="mr-2">Safety &amp; eco</li>
                  <li className="mr-2"> About our ads</li>
                  <li className="mr-2"> &copy; Microsoft 2020</li>
              </ul>
          </div>
          </div>

        </>
    )
}

export default Footer
