/**
 * ! DOM (Document Object Model) is just an Api to interact with HTML document and change it later on demand
 * ? when we change DOM tree after one load this is called DOM Manipulation
 * * DOM is provided by browser not javascript engine
 * * DOM is based on tree Data Structure
 * 
 * ? HTML document:
 * <ul>
 *   <li> one </li>
 *   <li> two </li>
 * </ul>
 * ? DOM:
 *           ul
 *         /   \
 *       li    li
 *      /       \
 *   text      text
 * 
 * ? there are 4 nodes in DOM:
 ** 1. Element Node ( html, head, body, div, h1, h2, h3, h4, h5, h5, p etc. )
 ** 2. Text Node ( every text between tags are Text Node )
 ** 3. Attribute Node ( all attributes are include in this Node )
 ** 4. Comments Node ( all comments are include in this Node )
 */
console.log(document)