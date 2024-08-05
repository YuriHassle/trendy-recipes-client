interface OEmbedResponse {
  version: string;
  type: string;
  title: string;
  author_url: string;
  author_name: string;
  width: string;
  height: string;
  html: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url: string;
  provider_url: string;
  provider_name: string;
}

export function useTikTok() {
  const getEmbedCodeFromUrl = async (url: string | undefined): Promise<string> => {
    if (!url) return '';
    const oEmbedUrl = 'https://www.tiktok.com/oembed';
    const { data, error } = await useFetch<OEmbedResponse>(oEmbedUrl, { params: { url } });
    if (error.value) throw new Error('Error fetching TikTok embed code');
    return data.value!.html;
  };

  return {
    getEmbedCodeFromUrl,
  };
}
