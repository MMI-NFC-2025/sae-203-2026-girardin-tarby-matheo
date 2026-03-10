/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2141013404",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_principale",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("file2141013404")

  return app.save(collection)
})
