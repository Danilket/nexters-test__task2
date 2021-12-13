async function getResponse() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const content = await response.json()

	const list = document.querySelector('.users')

	for (key in content) {
		const user = content[key]
		const phoneClear = user.phone.replace(/[^\d]/g, '')

		list.innerHTML += `
			<li class="user">
					<h4 class="user__title">${user.name}</h4>
					<a class="user__email" href="mailto:${user.email}">${user.email}</a>
					<a class="user__phone" href="tel:${phoneClear}">${user.phone}</a>
			</li>
			`
	}
}

getResponse()