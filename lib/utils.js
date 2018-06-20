'use strict'

function getChild(parentNode, name, required = true) {
  for (const el of parentNode.elements) {
    if (el.name === name) return el
  }
  if (!required) return null

  throw new Error(`Failed parsing hand, unable to find ${name} element`)
}

function getChildren(parentNode, name) {
  const children = []
  for (const el of parentNode.elements) {
    if (el.name === name) children.push(el)
  }
  return children
}

function getChildWithAttribute(parentNode, name, attrName, attrValue, required = true) {
  for (const el of parentNode.elements) {
    if (el.name === name && el.attributes[attrName] === attrValue) return el
  }
  if (!required) return null

  throw new Error(
    `Failed parsing hand, unable to find ${name} element with ${attrName}="${attrValue}" attribute`
  )
}

function extractText(node) {
  if (node.elements == null || node.elements.length === 0) return null
  const textEl = node.elements[0]
  if (textEl.type !== 'text') return null
  return textEl.text
}

function extractTexts(node) {
  const map = new Map()
  for (const el of node.elements) {
    const text = extractText(el)
    if (text == null) continue
    map.set(el.name, text)
  }
  return map
}

function extractAllAttributes(node) {
  return node.elements.map(x => x.attributes)
}

function extractMatchingAttributes(node, name) {
  return node.elements
    .filter(x => x.name === name)
    .map(x => x.attributes)
}

module.exports = {
    getChild
  , getChildren
  , getChildWithAttribute
  , extractText
  , extractTexts
  , extractAllAttributes
  , extractMatchingAttributes
}
