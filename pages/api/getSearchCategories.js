import searchCategories from '../../data/search_categories.json'

export default async function handler(req, res) {

  res.status(200).json({ searchCategories })
}