import { Article, Event } from "@types";

enum Endpoints {
  GetArticle = "/api/articles/get_single",
  GetArticles = "/api/articles/get_all",
  AddArticle = "/api/articles/add",
  EditArticle = "/api/articles/edit",
  DeleteArticle = "/api/articles/delete",

  GetEvents = "/api/events/get",
  AddEvent = "/api/events/add",
  EditEvent = "/api/events/edit",
  DeleteEvent = "/api/events/delete",
}

const postOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

// Article related API calls
export const getArticle = async (slug: string) => {
  return await fetch(Endpoints.GetArticle, {
    ...postOptions,
    body: JSON.stringify({ slug }),
  }).then((res) => res.json());
};

export const getArticles = async () => {
  return await fetch(Endpoints.GetArticles).then((res) => res.json());
};

export const addArticle = async (article: Article) => {
  return await fetch(Endpoints.AddArticle, {
    ...postOptions,
    body: JSON.stringify(article),
  }).then((res) => res.json());
};

export const editArticles = async (article: Article) => {
  return await fetch(Endpoints.EditArticle, {
    ...postOptions,
    body: JSON.stringify(article),
  }).then((res) => res.json());
};

export const deleteArticle = async (id: string) => {
  return await fetch(Endpoints.DeleteArticle, {
    ...postOptions,
    body: JSON.stringify({ id }),
  }).then((res) => res.json());
};

// Article related API calls
export const getEvents = async () => {
  return await fetch(Endpoints.GetEvents).then((res) => res.json());
};

export const addEvent = async (event: Event) => {
  return await fetch(Endpoints.AddEvent, {
    ...postOptions,
    body: JSON.stringify(event),
  }).then((res) => res.json());
};

export const editEvent = async (event: Event) => {
  return await fetch(Endpoints.EditEvent, {
    ...postOptions,
    body: JSON.stringify(event),
  }).then((res) => res.json());
};

export const deleteEvent = async (id: string) => {
  return await fetch(Endpoints.DeleteEvent, {
    ...postOptions,
    body: JSON.stringify({ id }),
  }).then((res) => res.json());
};