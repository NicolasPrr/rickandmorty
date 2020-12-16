import React from 'react'
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: [
        "//at.alicdn.com/t/font_2273490_fprlsksw92u.js",
    ],
});

const DeadIcon = () => (
    <IconFont
        type="icon_Dead"
    />
)
export default DeadIcon



