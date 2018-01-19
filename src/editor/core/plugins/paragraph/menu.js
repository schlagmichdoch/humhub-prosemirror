/*
 * @link https://www.humhub.org/
 * @copyright Copyright (c) 2017 HumHub GmbH & Co. KG
 * @license https://www.humhub.com/licences
 *
 */

import {blockTypeItem} from "../../menu/menu"

function makeParagraph(context) {
    return blockTypeItem(context.schema.nodes.paragraph, {
        title: "Change to paragraph",
        label: "Paragraph"
    })
}

export function menu(context) {
    return [
        {
            id: 'makeParagraph',
            node: 'paragraph',
            group: 'types',
            item: makeParagraph(context)
        }
    ]
}