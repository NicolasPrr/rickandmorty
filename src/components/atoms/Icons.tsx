import React from 'react'
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: [
        "//at.alicdn.com/t/font_2273490_mvfpprqi9n.js",
    ],
});

export const DeadIcon = () => (
    <IconFont
        type="icon_Dead"
    />
)
export const MaleIcon = () => (
    <IconFont
        type="icon_male"
    />
)
export const FemaleIcon = () => (
    <IconFont
        type="icon_female"
    />
)
export default DeadIcon



