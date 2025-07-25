class Storage {
	constructor(items) {
		this.items = items
	}
	getItems() {
		return this.items
	}
	addItem(item) {
		return this.items.push(item)
	}
	removeItem(item) {
		const idx = this.items.indexOf(item)
		if (idx !== -1) {
			this.items.splice(idx, 1)
		}
	}
}

const storage = new Storage([
	'Нанітоіди',
	'Пролонгер',
	'Залізні жупи',
	'Антигравітатор',
])

const items = storage.getItems()
console.table(items) // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд')
console.table(storage.items) // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер')
console.table(storage.items) // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
