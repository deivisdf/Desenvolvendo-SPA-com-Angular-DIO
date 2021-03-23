import { Source } from "./source";

export interface Noticia {

author?: string;
content?: string;
description?: string;
publishedAt?: string;
source?: Source;
title?: string;
url?: string
urlToImage?: string;
}
