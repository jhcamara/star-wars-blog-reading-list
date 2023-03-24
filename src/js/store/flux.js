const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			vehicles:[],
			planets:[],
			person:[],
			vehicle:[],
			planet:[],
			favorites:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// my code starts here

			getPeople: async () => {
                try {
					return fetch("https://www.swapi.tech/api/people?page=1&limit=10", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ people: data.results}));
				} catch (error) {
					return [];
				}
            },

			getPerson: id => {
				try {
					return fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => 
							setStore({ person: data.result}));
				} catch (error) {
					return [];
				}
			},

			}       


	};
};

export default getState;
