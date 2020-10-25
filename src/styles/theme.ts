import { color } from "./colorPhalette";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core";

/* eslint-disable */

export const vars = {
  backdrop: {
    zIndex: 1200,
  },
  sidebar: {
    zIndex: 7,
  },
  navbar: {
    height: "3.5rem",
    zIndex: 5,
  },
  footer: {
    bgColor: color.black,
  },
};

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
export const Hide = styled.div.attrs((p: HideProps) => ({
  x: p.size,
}))<HideProps>`
  ${p => {
    if (p.size == "mmin") {
      return `${media.mobile.min} {display:none;}`;
    } else if ((p.size = "mmax")) {
      return `${media.mobile.max} {display:none;}`;
    } else if ((p.size = "tmin")) {
      return `${media.tablet.min} {display:none;}`;
    } else if ((p.size = "tmax")) {
      return `${media.tablet.max} {display:none;}`;
    } else if ((p.size = "lmin")) {
      return `${media.laptop.min} {display:none;}`;
    } else if ((p.size = "lmax")) {
      return `${media.laptop.max} {display:none;}`;
    }
  }}
`;

export const StyledTheme = {
  color,
  vars,
  deviceSize,
  media,
};

export const MaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.brown[3],
    },
    secondary: {
      main: color.red[0],
    },
  },
});
