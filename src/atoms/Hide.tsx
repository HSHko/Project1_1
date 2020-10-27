import styled from "styled-components";

const deviceSize = {
  mobile: {
    min: "1px",
    max: "768px",
  },
  tablet: {
    min: "769px",
    max: "1024px",
  },
  laptop: {
    min: "1025px",
    max: "1440px",
  },
};

const media = {
  mobile: {
    min: `@media(min-width: ${deviceSize.mobile.min})`,
    max: `@media(max-width: ${deviceSize.mobile.max})`,
  },
  tablet: {
    min: `@media(min-width: ${deviceSize.tablet.min})`,
    max: `@media(max-width: ${deviceSize.tablet.max})`,
  },
  laptop: {
    min: `@media(min-width: ${deviceSize.laptop.min})`,
    max: `@media(max-width: ${deviceSize.laptop.max})`,
  },
};

interface HideProps {
  size: string;
}

export default styled.div.attrs((p: HideProps) => ({
  size: p.size,
}))<HideProps>`
  ${p => {
    if (p.size === "mmin") {
      return `${media.mobile.min} {display:none;}`;
    } else if (p.size === "mmax") {
      return `${media.mobile.max} {display:none;}`;
    } else if (p.size === "tmin") {
      return `${media.tablet.min} {display:none;}`;
    } else if (p.size === "tmax") {
      return `${media.tablet.max} {display:none;}`;
    } else if (p.size === "lmin") {
      return `${media.laptop.min} {display:none;}`;
    } else if (p.size === "lmax") {
      return `${media.laptop.max} {display:none;}`;
    }
  }}
`;
