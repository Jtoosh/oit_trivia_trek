const NavBar = () => {
	return (
		<nav className="bg-blue-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
				<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-width="2"
								d="M5 7h14M5 12h14M5 17h14"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-center w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
						<li>
							<a
								href="yes.com"
								className="block py-2 px-3 text-white hover:text-blue-200"
								aria-current="page"
							>
								Home
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
