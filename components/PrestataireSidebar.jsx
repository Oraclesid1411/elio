import React from 'react'

const PrestataireSidebar = () => {
    return (
        <div class="col-lg-3 col-md-12 col-sm-12">
            <div class="simple-sidebar sm-sidebar">

                <div class="search-sidebar_header">
                    <h4 class="ssh_heading">Filtre de recherche</h4>
                    <a href="javascript:void(0);" class="clear_all">Réinitialiser</a><a href="#search_open" data-toggle="collapse" aria-expanded="false" role="button" class="collapsed _filter-ico"><i class="fa fa-sliders"></i></a>
                </div>
                <div class="sidebar-widgets collapse miz_show" id="search_open" data-parent="#search_open">

                    <div class="search-inner p-0">

                        <div class="filter-search-box pb-0">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Taper le service..."/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="La ville.."/>
                            </div>
                        </div>

                        <div class="form-group filter_button pt-2">
                            <button type="submit" class="btn btn-success btn-theme-2 rounded full-width">
                            <i className="ti-search"></i> Lancer
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PrestataireSidebar