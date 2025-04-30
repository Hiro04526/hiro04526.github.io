import * as React from "react";

type IonIconProps = {
    name: string;
    className?: string;
};
  
const IonIcon = ({ name, className }: IonIconProps) => {
    return React.createElement("ion-icon", { name, class: className });
};
  
export default IonIcon;
  
  