import React from 'react'

const TopCategories = () => {
    return (
        <section className="min-sec gray-light">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9">
                        <div className="sec-heading">
                            <h2>Dernières annonces et recherche</h2>
                            <p>Consultez les annonces et recherches récemment publiées.</p>
                        </div>
                    </div>
                </div>

                <div className="row  justify-content-center">

                    <div className="col-lg-4 col-md-6 col-sm-12" hidden>
                        <div className="_jb_list72">
                            <div className="jobs-like bookmark">
                                <label className="toggler toggler-danger">
                                    <input type="checkbox"/><i className="fa fa-bookmark"></i></label>
                            </div>
                            <div className="_jb_list72_flex">
                                <div className="_jb_list72_first">
                                    <div className="_jb_list72_yhumb">
                                        <img src="assets/img/c-1.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="_jb_list72_last">
                                    <h4 className="_jb_title"><a href="job-detail.html">Application Designer</a></h4>
                                    <div className="_times_jb">$70k - 80k</div>
                                    <div className="_jb_types fulltime_lite">Full Time</div>
                                </div>
                            </div>
                            <div className="_jb_list72_foot">
                                <div className="_times_jb">Just now</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" hidden>
                        <div className="_jb_list72">
                            <div className="jobs-like bookmark">
                                <label className="toggler toggler-danger">
                                    <input type="checkbox"/><i className="fa fa-bookmark"></i></label>
                            </div>
                            <div className="_jb_list72_flex">
                                <div className="_jb_list72_first">
                                    <div className="_jb_list72_yhumb">
                                        <img src="assets/img/c-2.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="_jb_list72_last">
                                    <h4 className="_jb_title"><a href="job-detail.html">IOS Developer</a></h4>
                                    <div className="_times_jb">$55k - 80k</div>
                                    <div className="_jb_types parttime_lite">Part Time</div>
                                </div>
                            </div>
                            <div className="_jb_list72_foot">
                                <div className="_times_jb">10 min ago</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" hidden>
                        <div className="_jb_list72">
                            <div className="jobs-like bookmark">
                                <label className="toggler toggler-danger">
                                    <input type="checkbox" /><i className="fa fa-bookmark"></i></label>
                            </div>
                            <div className="_jb_list72_flex">
                                <div className="_jb_list72_first">
                                    <div className="_jb_list72_yhumb">
                                        <img src="assets/img/c-3.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="_jb_list72_last">
                                    <h4 className="_jb_title"><a href="job-detail.html">Web Developer</a></h4>
                                    <div className="_times_jb">$50k - 60k</div>
                                    <div className="_jb_types internship_lite">Internship</div>
                                </div>
                            </div>
                            <div className="_jb_list72_foot">
                                <div className="_times_jb">02 min ago</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TopCategories