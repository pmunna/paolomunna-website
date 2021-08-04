import React, { useEffect } from 'react';

const SiteLoader = ({  }) => {  
    return (
        <div class={`preloader`} >
            <div class="border">
                <div class="image-loader">
                    <div class="rect">
                        <div class="dot d_i"></div>
                        <div class="dot d_ii"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SiteLoader }
export default SiteLoader