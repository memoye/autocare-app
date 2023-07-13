import { useNavigate } from "react-router-dom";
import Logo from "../components/logo/Logo";

const TermsAndPrivacy = () => {
    const navigate = useNavigate()

    return (
        <div className="grid gap-10">

            <div className="text-justify m-4 max-w-md sm:m-auto">
                <div className="w-fit m-auto -translate-x-10 grid gap-8">

                    <Logo />
                </div>
                <div>
                    <h2 className="text-3xl text-slate-700 font-bold mb-4">
                        Terms and conditions
                    </h2>

                    <ol className="grid gap-4">
                        <li>
                            <strong>1. Acceptance of Terms</strong>
                            <br />By accessing and using the AutoCare Xpress application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the application.
                        </li>
                        <li>
                            <strong>2. Intellectual Property</strong>
                            <br />All intellectual property rights, including but not limited to copyrights, trademarks, and patents, related to AutoCare Xpress and its content are owned by the project team. You may not use, reproduce, distribute, or modify any part of the application without prior written consent from the project team.
                        </li>
                        <li>
                            <strong>3. Use of the Application</strong>
                            <br />AutoCare Xpress is intended for demonstration and educational purposes only. You are granted a limited, non-exclusive, and non-transferable right to access and use the application solely for personal and non-commercial purposes.
                        </li>
                        <li>
                            <strong>4. Data Privacy</strong>
                            <br />The application collects and processes user data in accordance with the Privacy Policy outlined below. By using AutoCare Xpress, you consent to the collection, storage, and processing of your personal information as described in the Privacy Policy.
                        </li>
                        <li>
                            <strong>5. User Responsibilities</strong>
                            <br />You are solely responsible for any content you upload or transmit through AutoCare Xpress. You agree not to use the application to engage in any unlawful or harmful activities, including but not limited to the dissemination of offensive or inappropriate content, violation of intellectual property rights, or unauthorized access to data.
                        </li>
                        <li>
                            <strong>6. Limitation of Liability</strong>
                            <br />The project team shall not be liable for any damages or losses arising out of or in connection with the use or inability to use AutoCare Xpress. This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages.
                        </li>
                    </ol>
                </div>
            </div>


            <div className=" text-justify m-4 mt-20 max-w-md sm:m-auto">
                <div>
                    <h2 className="text-3xl text-slate-700 font-bold mb-4">
                        Privacy Policy
                    </h2>

                    <ol className="grid gap-4">
                        <li>
                            <strong>Information Collection</strong>
                            <br />AutoCare Xpress may collect personal information such as name, email address, and contact details when you sign up or use certain features. This information is collected for the purpose of providing and improving the application's functionality and services.
                        </li>
                        <li>
                            <strong>Data Usage</strong>
                            <br />The personal information collected may be used to communicate with you, personalize your experience, and improve AutoCare Xpress' services. Your information will not be shared with third parties unless required by law or with your consent.
                        </li>
                        <li>
                            <strong>Data Security</strong>
                            <br />AutoCare Xpress implements reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission or storage is 100% secure, and the project team cannot guarantee absolute security.
                        </li>
                        <li>
                            <strong>Cookies and Tracking Technologies</strong>
                            <br />AutoCare Xpress may use cookies and similar tracking technologies to enhance your browsing experience and gather information about how the application is accessed and used. You can adjust your device settings to block cookies if you prefer.
                        </li>
                        <li>
                            <strong>Third-Party Links</strong>
                            <br />AutoCare Xpress may contain links to third-party websites or services. The project team is not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
                        </li>
                        <li>
                            <strong>Children's Privacy</strong>
                            <br />AutoCare Xpress is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us to have it removed.
                        </li>
                        <li>
                            <strong>Contact Information</strong>
                            <br />If you have any questions or concerns regarding the Terms of Service or Privacy Policy, please contact us at [email address].
                        </li>
                    </ol>
                </div>
                <div className="mt-2">
                    <input onClick={ () => { const go = setTimeout(() => { navigate("/signup") }, 2000) } } className="border-2 border-slate-700" type="checkbox" name="agree" id="agree" />
                    <label className="ml-2 text-blue-600 font-bold italic" htmlFor="agree">I agree</label>
                </div>
            </div>
        </div>
    );
};

export default TermsAndPrivacy;
