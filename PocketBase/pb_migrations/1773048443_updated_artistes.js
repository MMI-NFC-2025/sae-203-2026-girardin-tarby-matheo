/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("date2862495610")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3899666902",
    "max": "",
    "min": "",
    "name": "debut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date4056942177",
    "max": "",
    "min": "",
    "name": "fin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date3899666902",
    "max": "",
    "min": "",
    "name": "heure_debut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date4056942177",
    "max": "",
    "min": "",
    "name": "heure_fin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
