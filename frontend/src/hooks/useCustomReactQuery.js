import { useState, useEffect } from "react";
import axios from "axios";

const useCustomReactQuery = (urlPath) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				setError(false);
				const response = await axios.get(urlPath);
				console.log(response.data);
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(false);
				console.error("Error fetching products:", error);
			}
		})();
	}, [urlPath]);

	return { products, error, loading };
};

export default useCustomReactQuery;
