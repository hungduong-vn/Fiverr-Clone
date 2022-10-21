import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  margin: 0 auto 48px;
  background-color: #fafafa;

  .max-width-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }
  .trusted-by-text {
    padding-right: 1.25rem;
    font-weight: 600;
    color: #b5b6ba;
    display: none;
  }
  .trusted-by-list {
    display: flex;
    margin: 0;
    padding: 0 1.5rem;
    height: 70px;
    align-items: center;
    li {
      padding-right: 1rem;
      &.display-from-sm {
        display: none;
        padding-right: 0 !important;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 5rem;
    .trusted-by-list {
      li {
        padding-right: 1.5rem;
        &.display-from-sm {
          display: block;
        }
      }
    }
  }
  @media only screen and (min-width: 900px) {
    margin-bottom: 6rem;
    .trusted-by-list {
      height: 95px;
      li {
        padding-right: 3.75rem;
      }
    }
  }
  @media only screen and (min-width: 1160px) {
    .trusted-by-text {
      display: inline-block;
    }
  }
`;

export default function TrustedBy() {
  return (
    <Styled>
      <div className="max-width-container">
        <span className="trusted-by-text"> Trusted by:</span>
        <ul className="trusted-by-list">
          <li className>
            <picture>
              <source
                media="(max-width: 899px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.543cf10.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.2eb3efa.png 2x"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png 2x"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                alt="facebook"
              />
            </picture>
          </li>
          <li className>
            <picture>
              <source
                media="(max-width: 899px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.aaaa0ad.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.b5c24c4.png 2x"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png 2x"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                alt="Google"
              />
            </picture>
          </li>
          <li className>
            <picture>
              <source
                media="(max-width: 899px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.3cb353a.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.02746a2.png 2x"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png 2x"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                alt="NETFLIX"
              />
            </picture>
          </li>
          <li className>
            <picture>
              <source
                media="(max-width: 899px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.128c0d9.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.259884d.png 2x"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png 2x"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                alt="P&G"
              />
            </picture>
          </li>
          <li className="display-from-sm">
            <picture>
              <source
                media="(max-width: 899px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.9e4defc.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.e48e2b0.png 2x"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png 2x"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                alt="PayPal"
              />
            </picture>
          </li>
        </ul>
      </div>
    </Styled>
  );
}
