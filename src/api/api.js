import React, { useState, useEffect } from "react";
import querystring from "querystring";
import { defer } from "rxjs";

import { apiUrl } from "../constants";

const cache = new Map();

export const useGet = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let r = cache.get(endpoint);
      if (!r) {
        r = await fetch(endpoint);
        r = await r.json();
        cache.set(endpoint, r);
      }
      return r;
    }

    const subscription = defer(() => fetchData()).subscribe(r => {
      console.log(r);
      setData(r);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [endpoint]);

  return [data, loading];
};

export const useCategories = () => {
  const endpoint = `${apiUrl}/categories/`;
  return useGet(endpoint);
};

export const useCategory = (id, filters) => {
  let endpoint = `${apiUrl}/categories/${id}/`;
  if (filters) {
    const queryParams = querystring.stringify({ label: filters });
    console.log(queryParams);
    endpoint = `${endpoint}?${queryParams}`;
  }
  return useGet(endpoint);
};

export const useLabels = id => {
  const endpoint = `${apiUrl}/labels/`;
  return useGet(endpoint, []);
};

export const useProduct = id => {
  const endpoint = `${apiUrl}/products/${id}`;
  return useGet(endpoint);
};
