import React, { useEffect } from 'react'
import {
    Collapse,
    initTE,
} from "tw-elements";

const FaqAccordian = () => {
    useEffect(() => {
        initTE({ Collapse });
    }, [])

    return (
        <div className='w-full'>
            <div id="accordionExample5">
                <div className="rounded-t-lg border-b bg-white ">
                    <h2 className="mb-0" id="headingOne5">
                        <button
                            className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
                            type="button"
                            data-te-collapse-init=""
                            data-te-target="#collapseOne5"
                            aria-expanded="true"
                            aria-controls="collapseOne5"
                        >

                            <span className=" h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99994 -0.00146484C4.4862 -0.00146484 0 4.48399 0 9.99852C0 15.5125 4.4862 19.998 9.99994 19.998C15.5138 19.998 20 15.5125 20 9.99852C20 4.48399 15.5138 -0.00146484 9.99994 -0.00146484ZM14.8076 10.7673H10.7692V14.998C10.7692 15.4232 10.4246 15.7679 9.99994 15.7679C9.57538 15.7679 9.2308 15.4232 9.2308 14.998V10.7673H5.1923C4.76772 10.7673 4.42301 10.4227 4.42301 9.99852C4.42301 9.57325 4.76772 9.2297 5.1923 9.2297H9.2308V5.3824C9.2308 4.95821 9.57538 4.61358 9.99994 4.61358C10.4246 4.61358 10.7692 4.95821 10.7692 5.3824V9.2297H14.8076C15.2323 9.2297 15.5769 9.57325 15.5769 9.99852C15.5769 10.4227 15.2323 10.7673 14.8076 10.7673Z" fill="#3FDBB1" />
                                </svg>
                            </span>
                            <span className='ml-4 text-md font-semibold'>How to Contrat with riders in emergency?</span>
                        </button>
                    </h2>
                    <div
                        id="collapseOne5"
                        className="!visible"
                        data-te-collapse-item=""
                        data-te-collapse-show=""
                        aria-labelledby="headingOne5"
                    >
                        <div className="px-5 py-4">
                            <strong>This is the first item's accordion body.</strong> It is shown by
                            default, until the collapse plugin adds the appropriate classes that we
                            use to style each element. These classes control the overall appearance,
                            as well as the showing and hiding via CSS transitions. You can modify
                            any of this with custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="border-b   bg-white ">
                    <h2 className="mb-0" id="headingTwo5">
                        <button
                            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
                            type="button"
                            data-te-collapse-init=""
                            data-te-collapse-collapsed=""
                            data-te-target="#collapseTwo5"
                            aria-expanded="false"
                            aria-controls="collapseTwo5"
                        >

                            <span className=" h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99994 -0.00146484C4.4862 -0.00146484 0 4.48399 0 9.99852C0 15.5125 4.4862 19.998 9.99994 19.998C15.5138 19.998 20 15.5125 20 9.99852C20 4.48399 15.5138 -0.00146484 9.99994 -0.00146484ZM14.8076 10.7673H10.7692V14.998C10.7692 15.4232 10.4246 15.7679 9.99994 15.7679C9.57538 15.7679 9.2308 15.4232 9.2308 14.998V10.7673H5.1923C4.76772 10.7673 4.42301 10.4227 4.42301 9.99852C4.42301 9.57325 4.76772 9.2297 5.1923 9.2297H9.2308V5.3824C9.2308 4.95821 9.57538 4.61358 9.99994 4.61358C10.4246 4.61358 10.7692 4.95821 10.7692 5.3824V9.2297H14.8076C15.2323 9.2297 15.5769 9.57325 15.5769 9.99852C15.5769 10.4227 15.2323 10.7673 14.8076 10.7673Z" fill="#3FDBB1" />
                                </svg>
                            </span>
                            <span className='ml-4 text-md font-semibold'>App installation failed, how to update system information?</span>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo5"
                        className="!visible hidden"
                        data-te-collapse-item=""
                        aria-labelledby="headingTwo5"
                    >
                        <div className="px-5 py-4">
                            <strong>This is the second item's accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes that
                            we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
                <div className="rounded-b-lg border-b  border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingThree5">
                        <button
                            className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]  [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                            type="button"
                            data-te-collapse-init=""
                            data-te-collapse-collapsed=""
                            data-te-target="#collapseThree5"
                            aria-expanded="false"
                            aria-controls="collapseThree5"
                        >

                            <span className=" h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99994 -0.00146484C4.4862 -0.00146484 0 4.48399 0 9.99852C0 15.5125 4.4862 19.998 9.99994 19.998C15.5138 19.998 20 15.5125 20 9.99852C20 4.48399 15.5138 -0.00146484 9.99994 -0.00146484ZM14.8076 10.7673H10.7692V14.998C10.7692 15.4232 10.4246 15.7679 9.99994 15.7679C9.57538 15.7679 9.2308 15.4232 9.2308 14.998V10.7673H5.1923C4.76772 10.7673 4.42301 10.4227 4.42301 9.99852C4.42301 9.57325 4.76772 9.2297 5.1923 9.2297H9.2308V5.3824C9.2308 4.95821 9.57538 4.61358 9.99994 4.61358C10.4246 4.61358 10.7692 4.95821 10.7692 5.3824V9.2297H14.8076C15.2323 9.2297 15.5769 9.57325 15.5769 9.99852C15.5769 10.4227 15.2323 10.7673 14.8076 10.7673Z" fill="#3FDBB1" />
                                </svg>
                            </span>
                            <span className='ml-4 text-md font-semibold'>New update fixed all bug and issues</span>
                        </button>
                    </h2>
                    <div
                        id="collapseThree5"
                        className="!visible hidden"
                        data-te-collapse-item=""
                        aria-labelledby="headingThree5"
                    >
                        <div className="px-5 py-4">
                            <strong>This is the third item's accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes that
                            we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default FaqAccordian