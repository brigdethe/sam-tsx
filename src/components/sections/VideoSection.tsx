import { pageCode } from '../../content/pageCode.js';
export function VideoSection() {
    return (<section className="section is-video-section">
        <div data-poster-url="https://cdn.prod.website-files.com/660bf8fee4119100edb95de5/660c4d9ea1cb304cd93e6f57_-5802-49f7-857b-03801bf88a8e-poster-00001.jpg" data-video-urls="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0d_-5802-49f7-857b-03801bf88a8e-transcode.mp4,https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0d_-5802-49f7-857b-03801bf88a8e-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="video-flow-about w-background-video w-background-video-atom">
          <video id="642c19d9-e670-46af-2da4-8c0652a23620-video" autoPlay={true} loop={true} style={{ "backgroundImage": "url(\"https://cdn.prod.website-files.com/660bf8fee4119100edb95de5/660c4d9ea1cb304cd93e6f57_-5802-49f7-857b-03801bf88a8e-poster-00001.jpg\")" }} muted={true} playsInline={true} data-wf-ignore="true" data-object-fit="cover">
            <source src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0d_-5802-49f7-857b-03801bf88a8e-transcode.mp4" data-wf-ignore="true"/>
            <source src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0d_-5802-49f7-857b-03801bf88a8e-transcode.webm" data-wf-ignore="true"/>
          </video>
          <a href="#" className="lightbox-link w-inline-block w-lightbox">
            <div className="play-button mobile-button">
              <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de13_triangle-right%201.svg" loading="lazy" width="16" height="16" alt="" className="button-arrow"/>
            </div>
            <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: pageCode.primaryLightboxConfig }}/>
          </a>
          <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de10_Vector%2027.svg" loading="lazy" alt="" className="left-blur-gradient"/>
        </div>
        <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0f_icon%20-%20edid%20this.png" loading="lazy" style={{ "opacity": "0" }} data-w-id="7f4d1b01-9d33-6ac5-0e09-25f3f3691191" alt="" className="logo-badge"/>
        <div className="w-layout-blockcontainer container video-description w-container">
          <h3 data-w-id="37ccef0a-720f-03f7-18af-3c475af6356c">
            {"Ghana's leading technology experts"}
          </h3>
          <div className="subtle-divider"></div>
          <div className="video-copy">
            <a href="#" className="w-inline-block w-lightbox">
              <div data-w-id="269e151d-c674-9924-dae0-8dc2f435782a" className="play-button desktop-button">
                <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de13_triangle-right%201.svg" loading="lazy" width="16" height="16" alt="" className="button-arrow"/>
              </div>
              <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: pageCode.secondaryLightboxConfig }}/>
            </a>
            <div className="video-desc">
              <p data-w-id="1b39b2b6-1eac-7688-bd2b-5e16c81a7ce8" className="is-md-font-size-body-l">
                {"We provide comprehensive technology solutions, including software development, web design, and expert cybersecurity services to drive business growth."}
              </p>
            </div>
          </div>
        </div>
        <div className="blur-tiles">
          <div className="blur-tile"></div>
          <div className="blur-tile _2"></div>
          <div className="blur-tile"></div>
        </div>
        <div className="gradient-video">
          <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de10_Vector%2027.svg" loading="lazy" alt="" className="left-blur-gradient"/>
          <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de11_Vector%202.svg" loading="lazy" alt="" className="bottom-blur-gradient"/>
        </div>
      </section>);
}
