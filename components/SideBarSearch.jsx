import React from 'react'

const SideBarSearch = () => {
    return (
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="simple-sidebar sm-sidebar">

                <div className="search-sidebar_header">
                    <h4 className="ssh_heading">Search Filter</h4>
                    <a href="javascript:void(0);" className="clear_all">Clear All</a><a href="#search_open" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed _filter-ico"><i className="fa fa-sliders"></i></a>
                </div>
                <div className="sidebar-widgets collapse miz_show" id="search_open" data-parent="#search_open">

                    <div className="search-inner p-0">

                        <div className="filter-search-box pb-0">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search by keywords..."/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Location, Zip.."/>
                            </div>
                        </div>

                        <div className="filter_wraps">

                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#categories" data-toggle="collapse" aria-expanded="true" role="button">Job Categories</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse show" id="categories" data-parent="#categories">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="a1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                                <label for="a1" className="checkbox-custom-label">IT Computers (62)</label>
                                                                <ul className="no-ul-list filter-list">
                                                                    <li>
                                                                        <input id="aa1" className="checkbox-custom" name="ADA" type="checkbox"/>
                                                                            <label for="aa1" className="checkbox-custom-label">Web Design (31)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="aa2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                            <label for="aa2" className="checkbox-custom-label">Web development (20)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="aa3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                            <label for="aa3" className="checkbox-custom-label">SEO Services (43)</label>
                                                                    </li>
                                                                </ul>
                                                        </li>
                                                        <li>
                                                            <input id="a2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                <label for="a2" className="checkbox-custom-label">Financial Service (16)</label>
                                                        </li>
                                                        <li>
                                                            <input id="a3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="a3" className="checkbox-custom-label">Art, Design, Media (22)</label>
                                                        </li>
                                                        <li>
                                                            <input id="a4" className="checkbox-custom" name="Mother" type="checkbox"/>
                                                                <label for="a4" className="checkbox-custom-label">Coach &amp; Education (21)</label>
                                                        </li>
                                                        <li>
                                                            <input id="a5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
                                                                <label for="a5" className="checkbox-custom-label">Apps Developements (17)</label>
                                                                <ul className="no-ul-list filter-list">
                                                                    <li>
                                                                        <input id="ab1" className="checkbox-custom" name="ADA" type="checkbox"/>
                                                                            <label for="ab1" className="checkbox-custom-label">IOS Development (12)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="ab2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                            <label for="ab2" className="checkbox-custom-label">Android Development (04)</label>
                                                                    </li>
                                                                </ul>
                                                        </li>
                                                        <li>
                                                            <input id="a6" className="checkbox-custom" name="Pet" type="checkbox"/>
                                                                <label for="a6" className="checkbox-custom-label">Writing &amp; Translation (04)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#locations" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Job Locations</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse" id="locations" data-parent="#locations">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="b1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                                <label for="b1" className="checkbox-custom-label">Australia (21)</label>
                                                        </li>
                                                        <li>
                                                            <input id="b2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                <label for="b2" className="checkbox-custom-label">New Zeland (12)</label>
                                                        </li>
                                                        <li>
                                                            <input id="b3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="b3" className="checkbox-custom-label">United Kingdom (21)</label>
                                                                <ul className="no-ul-list filter-list">
                                                                    <li>
                                                                        <input id="ac1" className="checkbox-custom" name="ADA" type="checkbox"/>
                                                                            <label for="ac1" className="checkbox-custom-label">London (06)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="ac2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                            <label for="ac2" className="checkbox-custom-label">Manchester (07)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="ac3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                            <label for="ac3" className="checkbox-custom-label">Birmingham (08)</label>
                                                                    </li>
                                                                </ul>
                                                        </li>
                                                        <li>
                                                            <input id="b4" className="checkbox-custom" name="Mother" type="checkbox"/>
                                                                <label for="b4" className="checkbox-custom-label">United State (04)</label>
                                                                <ul className="no-ul-list filter-list">
                                                                    <li>
                                                                        <input id="ad1" className="checkbox-custom" name="ADA" type="checkbox"/>
                                                                            <label for="ad1" className="checkbox-custom-label">New York (32)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="ad2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                            <label for="ad2" className="checkbox-custom-label">Washington (42)</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="ad3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                            <label for="ad3" className="checkbox-custom-label">Los Angeles (22)</label>
                                                                    </li>
                                                                </ul>
                                                        </li>
                                                        <li>
                                                            <input id="b5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
                                                                <label for="b5" className="checkbox-custom-label">India (15)</label>
                                                        </li>
                                                        <li>
                                                            <input id="b6" className="checkbox-custom" name="Pet" type="checkbox"/>
                                                                <label for="b6" className="checkbox-custom-label">Singapore (09)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#skills" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Skills</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse" id="skills" data-parent="#skills">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="c1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                                <label for="c1" className="checkbox-custom-label">Administrative (15)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                <label for="c2" className="checkbox-custom-label">iPhone &amp; Android (33)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="c3" className="checkbox-custom-label">Java &amp; AJAX (32)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c4" className="checkbox-custom" name="Mother" type="checkbox"/>
                                                                <label for="c4" className="checkbox-custom-label">Account Manager (21)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
                                                                <label for="c5" className="checkbox-custom-label">WordPress (32)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c6" className="checkbox-custom" name="Pet" type="checkbox"/>
                                                                <label for="c6" className="checkbox-custom-label">Magento (42)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c7" className="checkbox-custom" name="Beauty" type="checkbox"/>
                                                                <label for="c7" className="checkbox-custom-label">Shopify (12)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c8" className="checkbox-custom" name="Bike" type="checkbox"/>
                                                                <label for="c8" className="checkbox-custom-label">PHP Script (08)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c9" className="checkbox-custom" name="Phone" type="checkbox"/>
                                                                <label for="c9" className="checkbox-custom-label">Drupal (32)</label>
                                                        </li>
                                                        <li>
                                                            <input id="c11" className="checkbox-custom" name="Private" type="checkbox"/>
                                                                <label for="c11" className="checkbox-custom-label">Joomla (50)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#experience" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Experience</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse" id="experience" data-parent="#experience">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="d1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                                <label for="d1" className="checkbox-custom-label">Beginner (54)</label>
                                                        </li>
                                                        <li>
                                                            <input id="d2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                <label for="d2" className="checkbox-custom-label">1+ Year (32)</label>
                                                        </li>
                                                        <li>
                                                            <input id="d3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="d3" className="checkbox-custom-label">2 Year (09)</label>
                                                        </li>
                                                        <li>
                                                            <input id="d4" className="checkbox-custom" name="Mother" type="checkbox"/>
                                                                <label for="d4" className="checkbox-custom-label">3+ Year (16)</label>
                                                        </li>
                                                        <li>
                                                            <input id="d5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
                                                                <label for="d5" className="checkbox-custom-label">4+ Year (17)</label>
                                                        </li>
                                                        <li>
                                                            <input id="d6" className="checkbox-custom" name="Pet" type="checkbox"/>
                                                                <label for="d6" className="checkbox-custom-label">5+ Year (22)</label>
                                                        </li>
                                                        <li>
                                                            <input id="d7" className="checkbox-custom" name="Beauty" type="checkbox"/>
                                                                <label for="d7" className="checkbox-custom-label">10+ Year (32)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#jbtypes" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Job Type</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse" id="jbtypes" data-parent="#jbtypes">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="e2" className="radio-custom" name="jtype" type="radio"/>
                                                                <label for="e2" className="radio-custom-label">Full time</label>
                                                        </li>
                                                        <li>
                                                            <input id="e3" className="radio-custom" name="jtype" type="radio"/>
                                                                <label for="e3" className="radio-custom-label">Part Time</label>
                                                        </li>
                                                        <li>
                                                            <input id="e4" className="radio-custom" name="jtype" type="radio" checked=""/>
                                                                <label for="e4" className="radio-custom-label">Contract Base</label>
                                                        </li>
                                                        <li>
                                                            <input id="e5" className="radio-custom" name="jtype" type="radio"/>
                                                                <label for="e5" className="radio-custom-label">Internship</label>
                                                        </li>
                                                        <li>
                                                            <input id="e6" className="radio-custom" name="jtype" type="radio"/>
                                                                <label for="e6" className="radio-custom-label">Regular</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#jblevel" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Job Level</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse" id="jblevel" data-parent="#jblevel">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="f1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                                <label for="f1" className="checkbox-custom-label">Team Leader</label>
                                                        </li>
                                                        <li>
                                                            <input id="f2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                <label for="f2" className="checkbox-custom-label">Manager</label>
                                                        </li>
                                                        <li>
                                                            <input id="f3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="f3" className="checkbox-custom-label">Junior</label>
                                                        </li>
                                                        <li>
                                                            <input id="f4" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="f4" className="checkbox-custom-label">Senior</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
//
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#salary" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Expected Salary</a>
                                    </h4>

                                </div>
                                <div className="widget-boxed-body collapse" id="salary" data-parent="#salary">
                                    <div className="side-list no-border">
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="g1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                                <label for="g1" className="checkbox-custom-label">$120k - $140k PA</label>
                                                        </li>
                                                        <li>
                                                            <input id="g2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                                <label for="g2" className="checkbox-custom-label">$140k - $150k PA</label>
                                                        </li>
                                                        <li>
                                                            <input id="g3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                                <label for="g3" className="checkbox-custom-label">$150k - $170k PA</label>
                                                        </li>
                                                        <li>
                                                            <input id="g4" className="checkbox-custom" name="Mother" type="checkbox"/>
                                                                <label for="g4" className="checkbox-custom-label">$170k - $190k PA</label>
                                                        </li>
                                                        <li>
                                                            <input id="g5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
                                                                <label for="g5" className="checkbox-custom-label">$200k - $250k PA</label>
                                                        </li>
                                                        <li>
                                                            <input id="g6" className="checkbox-custom" name="Pet" type="checkbox"/>
                                                                <label for="g6" className="checkbox-custom-label">$250k - $300k PA</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="form-group filter_button pt-2">
                            <button type="submit" className="btn btn btn-theme-2 rounded full-width">22 Results Show</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarSearch