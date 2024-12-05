declare module "*.png" {
    const value: string;
    export default value;
  }
declare module "*.jpg" {
    const value: string;
    export default value;
}
declare module "*.svg" {
    import React from "react";
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const content: string;
    export { ReactComponent };
    export default content;
}
  
  declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
