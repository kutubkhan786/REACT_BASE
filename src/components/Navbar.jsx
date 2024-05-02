import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "../styles/Navbar.css"; // Import your custom CSS file for additional styling
import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <Navbar expand="lg" className="my-navbar fixed-top justify-content-between">
      <div className=" d-flex flex-column w-100">
        <div className=" my-navbar d-flex flex-lg-row flex-column ">
          <div className="effect  top d-flex flex-row justify-content-between m-2">
            <Navbar.Brand as={Link} to="/" className="mr-auto m-lg-2 ">
              <img
                alt="VSLOGO"
                loading="lazy"
                width="180"
                height="35"
                decoding="async"
                data-nimg="1"
                src="/assets/SEVA.gif"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          {/* <div className="d-flex flex-row justify-content-between"> */}

          <Navbar.Collapse
            className="justify-content-end m-2 "
            id="basic-navbar-nav "
          >
            <Nav className="ml-auto  ">
              <NavDropdown title="Consult an Expert" id="consult-dropdown">
                <NavDropdown.Item as={Link} to="/contact">
                  Talk to a Lawyer
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Talk to a Chatered Account
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Talk to a Company Secretary
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Talk to a IP/Trademark Lawyer
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Business Setup" id="consult-dropdown">
                <NavDropdown title="Business Registration" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/contact">
                    Private Limited Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    Limited Liability Partnership
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    One Person Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    Sole Proprietorship
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    Nidhi Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    Producer Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    Partnership Firm
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">
                    Startup India Registration
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Licenses & Registrations"
                  id="consult-submenu"
                >
                  <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                    <NavDropdown.Item
                      as={Link}
                      to="/digital-signature-certificate"
                    >
                      Digital Signature Certificate
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/contact/udyam-registration">
                      Udyam Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/msme-registration">
                      MSME Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/iso-certification">
                      ISO Certification
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/fssai-license">
                      FSSAI License
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/iec-code">
                      IEC (Import/Export Code)
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/apeda-rcmc">
                      APEDA RCMC
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/spice-board-registration">
                      Spice Board Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/fieo-registration">
                      FIEO Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/legal-metrology">
                      Legal Metrology
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hallmark-registration">
                      Hallmark Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/bis-registration">
                      BIS Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/liquor-license">
                      Liquor License
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/clra-registration-licensing"
                    >
                      CLRA Registration & Licensing
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/ad-code-registration">
                      AD Code Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/irdai-registration">
                      IRDAI Registration
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/drug-cosmetic-license">
                      Drug & Cosmetic License
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/customs-clearance">
                      Customs Clearance
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
                <NavDropdown title=" Web Development" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/contact">
                    Web/E-Commerce Website Development
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Tax & Compliance" id="consult-dropdown">
                <NavDropdown
                  title="GST and Other Indirect Tax"
                  id="consult-submenu"
                >
                  <NavDropdown.Item as={Link} to="/gst-registration">
                    GST Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gst-filing">
                    GST Filing
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gst-login-portal">
                    GST Login Portal
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/hsn-code-finder">
                    HSN Code Finder
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gst-cancellation-revocation">
                    GST Cancellation and Revocation
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/indirect-tax">
                    Indirect Tax
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rodtep">
                    RoDTEP
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Changes in Pvt Ltd Company"
                  id="consult-submenu"
                >
                  <NavDropdown.Item as={Link} to="/add-director">
                    Add a Director
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/remove-director">
                    Remove a Director
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/increase-authorized-capital">
                    Increase Authorized Capital
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/close-pvt-ltd-company">
                    Close the Pvt Ltd Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strike-off-company">
                    Strike off Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/change-objective-activity">
                    Change Objective/Activity
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/change-address">
                    Change Address
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Changes In Limited Liability Partnership"
                  id="consult-submenu"
                >
                  <NavDropdown.Item as={Link} to="/add-designated-partner">
                    Add Designated Partner
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/llp-agreement-changes">
                    Changes to LLP Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/close-llp">
                    Close the LLP
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Mandatory Annual Filings"
                  id="consult-submenu"
                >
                  <NavDropdown.Item as={Link} to="/annual-compliance-services">
                    Annual Compliance Services
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/llp-annual-filings">
                    LLP Annual Filings
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/cfss">
                    CFSS
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/secretarial-audit">
                    Secretarial Audit
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Labour Compliance" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/pf-registration">
                    Provident Fund (PF) Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/esi-registration">
                    ESI Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/professional-tax-registration"
                  >
                    Professional Tax Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/shops-and-establishments-license"
                  >
                    Shops and Establishments License
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/esop">
                    Employee Stock Option Plan (ESOP)
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/posh-compliance">
                    POSH Compliance
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/labor-law-advisor">
                    Labor Law Advisor
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Accounting & Tax" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/accounting-bookkeeping">
                    Accounting and Book-keeping
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/tds-return-filing">
                    TDS Return Filing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/individual-income-tax-filing"
                  >
                    Individual Income Tax Filing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/proprietorship-tax-return-filing"
                  >
                    Proprietorship Tax Return Filing
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/itr-for-llp">
                    ITR for LLP
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/corporate-tax">
                    Corporate Tax
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/income-tax-assessment">
                    Income Tax Assessment
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/income-tax-notice">
                    Income Tax Notice
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/virtual-cfo">
                    Virtual CFO
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Convert Your Business" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/proprietorship-to-pvt-ltd">
                    Proprietorship to Pvt Ltd Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/compliance-check">
                    Compliance Check - Secretarial Audit
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/due-diligence">
                    Due Diligence
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/rbi-compliance">
                    RBI Compliance
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/convert-partnership-llp">
                    Convert Partnership into LLP Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/convert-private-public">
                    Convert Private into Public Limited Company
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/convert-private-opc">
                    Convert Private into OPC Company
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Trademark & IP" id="consult-dropdown">
                <NavDropdown title="Trademark" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/trademark-registration">
                    Trademark Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trademark-search">
                    Trademark Search
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/respond-to-tm-objection">
                    Respond to TM Objection
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/well-known-trademark">
                    Well Known Trademark
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trademark-watch">
                    Trademark Watch
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trademark-renewal">
                    Trademark Renewal
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trademark-assignment">
                    Trademark Assignment
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/usa-trademark">
                    USA Trademark
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/international-trademark">
                    International Trademark
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trademark-class-finder">
                    Trademark Class Finder
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Copyright" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/copyright-registration">
                    Copyright Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/copyright-music">
                    Copyright Music
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Patent" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/indian-patent-search">
                    Indian Patent Search
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/provisional-patent-application"
                  >
                    Provisional Patent Application
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patent-registration">
                    Patent Registration
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Infringement" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/copyright-infringement">
                    Copyright Infringement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patent-infringement">
                    Patent Infringement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trademark-infringement">
                    Trademark Infringement
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Design Registration" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/logo-design">
                    Logo Design
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/design-registration">
                    Design Registration
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Documentation" id="consult-dropdown">
                <NavDropdown title="Business Contracts" id="consult-submenu">
                  <NavDropdown.Item as={Link} to="/business-contracts">
                    Business Contracts
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/nda">
                    Non-Disclosure Agreement (NDA)
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/service-level-agreement">
                    Service Level Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/franchise-agreement">
                    Franchise Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/master-service-agreement">
                    Master Service Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shareholders-agreement">
                    Shareholders Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/joint-venture-agreement">
                    Joint Venture Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/founders-agreement">
                    Founders Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/vendor-agreement">
                    Vendor Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/consultancy-agreement">
                    Consultancy Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/memorandum-of-understanding">
                    Memorandum of Understanding (MoU)
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/succession-certificate">
                    Succession Certificate
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/scope-of-work-agreement">
                    Scope of Work Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/share-purchase-agreement">
                    Share Purchase Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/relinquishment-deed">
                    Relinquishment Deed
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/legal-heir-certificate">
                    Legal Heir Certificate
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/trade-license">
                    Trade License
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/noncompete-agreement">
                    Noncompete Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/finance-agreement">
                    Finance Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gdpr">
                    GDPR
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Personal & Family" id="consult-submenu">
                <NavDropdown.Item as={Link} to="/will-registration">Will Registration</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/probate-of-will">Probate of Will</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/power-of-attorney">Power of Attorney</NavDropdown.Item>
      

                </NavDropdown>
                <NavDropdown title="Real Estate" id="consult-submenu">
                <NavDropdown.Item as={Link} to="/rental-agreement">Rental Agreement</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/sale-deed">Sale Deed</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/gift-deed">Gift Deed</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/rental-tenant-notice">Rental Tenant Notice</NavDropdown.Item>
      
                </NavDropdown>
                <NavDropdown title="Notices" id="consult-submenu">
                <NavDropdown.Item as={Link} to="/legal-notice">Legal Notice</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/money-recovery-notice">Legal Notice for Money Recovery</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/dues-recovery-notice">Legal Notice for Recovery of Dues</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/cheque-bounce-notice">Cheque Bounce Notice</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/consumer-protection-notice">Legal Notice Under Consumer Protection Act</NavDropdown.Item>
      
                </NavDropdown>
                <NavDropdown title="HR Policies" id="consult-submenu">
                <NavDropdown.Item as={Link} to="/employment-agreement">Employment Agreement</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/esop">Employee Stock Option Plan (ESOP)</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/payroll-maintenance">Payroll Maintenance</NavDropdown.Item>
    
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Others" id="consult-dropdown">
                <NavDropdown.Item as={Link} to="/contact">
                  Property
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Licenses & Registrations
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  File an e-FIR
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Marriage
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Immigration
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  File a Consumer Complaint
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Expert Services
                </NavDropdown.Item>
              </NavDropdown>

              {/* Add more NavDropdown elements for other menu items */}
              <Button className="button-login" variant="primary " as={Link} to="/login">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="pinkSec w-100">
          <p className="m-0 p-0">
            Professional tax is mandatory in your state! Avoid penalties.{" "}
            {/* <a as={Link} to="/contact" className="ApplyLink"> */}
            <Link to="/contact" className="ApplyLink">
              Apply Now
            </Link>
            {/* </a> */}
          </p>
        </div>
      </div>
    </Navbar>
  );
}

export default MyHeader;
