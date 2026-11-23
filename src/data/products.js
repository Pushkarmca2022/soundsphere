const img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const heroImages = {
  newItem: img('1589003077984-894e133dabab', 500),
  popular: img('1543512214-318c7553f230', 500),
  featured: img('1545454675-3531b543be5d', 900),
}

export const featuredProducts = [
  { id: 1, name: 'BoomBlast Portable', price: 4999, image: img('1564424224827-cd24b8915874', 600), colors: ['#222', '#d9534f', '#3b6fb6', '#f2f2f2'] },
  { id: 2, name: 'Rugged Go Speaker', price: 6499, image: img('1608043152269-423dbba4e7e1', 600), colors: ['#222', '#c0392b', '#2c7a4b'] },
  { id: 3, name: 'Smart Home Trio', price: 8999, image: img('1558089687-f282ffcbc126', 600), colors: ['#f2f2f2', '#555', '#222'] },
  { id: 4, name: 'Mini Voice Pod', price: 2999, image: img('1507646227500-4d389b0012be', 600), colors: ['#e88b7d', '#f2f2f2', '#222'] },
  { id: 5, name: 'Studio Bookshelf', price: 14999, image: img('1545454675-3531b543be5d', 600), colors: ['#222', '#8b5a2b'] },
  { id: 6, name: 'Pulse RGB Speaker', price: 5499, image: img('1589003077984-894e133dabab', 600), colors: ['#222', '#6c3fb5', '#e0a526'] },
]

export const newArrivals = [
  { id: 1, title: 'DJ Party Series', image: img('1470225620780-dba8ba36b745', 600) },
  { id: 2, title: 'Studio Monitors', image: img('1563330232-57114bb0823c', 600) },
  { id: 3, title: 'Home Studio Kit', image: img('1598488035139-bdbb2231ce04', 600) },
  { id: 4, title: 'Outdoor Bass', image: img('1564424224827-cd24b8915874', 600) },
]

export const smartSpeakers = [
  { id: 1, title: 'Fabric Smart Speaker', image: img('1543512214-318c7553f230', 700) },
  { id: 2, title: 'Smart Home Bundle', image: img('1558089687-f282ffcbc126', 700) },
  { id: 3, title: 'Mini Voice Pod', image: img('1507646227500-4d389b0012be', 700) },
]

export const shippingImage = img('1608043152269-423dbba4e7e1', 900)

export const formatINR = (n) => '₹' + n.toLocaleString('en-IN')
