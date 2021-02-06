import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import Categories from "./Categories.js";
const SuspectPhoto = styled.img`
  max-width: 100px;
  max-height: 100px;
`;
const ImageCell = ({data}) => {
  if (!data.primaryPhotoUrl) {
    return null;
  }
  const regexMatch = data.primaryPhotoUrl?.match(/https:\/\/drive.google.com\/file\/d\/(\w+)\//);
  let photoURL = data.primaryPhotoUrl;
  if (regexMatch) {
    photoURL = `https://drive.google.com/uc?export=view&id=${regexMatch[1]}`;
  }
  return /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("a", {
    href: photoURL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(SuspectPhoto, {
    src: photoURL,
    alt: ""
  })));
};
const HashtagLink = ({hashtag}) => {
  let formattedHashtag = hashtag;
  if (!formattedHashtag.startsWith("#")) {
    formattedHashtag = `#${hashtag}`;
  }
  return /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/search?q=${encodeURIComponent(formattedHashtag)}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, hashtag);
};
const HashtagCell = ({data}) => /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(HashtagLink, {
  hashtag: data.primaryHashtag
}), data.alternateHashtags.map((hashtag) => /* @__PURE__ */ React.createElement(React.Fragment, {
  key: hashtag
}, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement(HashtagLink, {
  hashtag
})))));
const LinksCell = ({data}) => {
  const links = [
    {
      label: "Composites",
      url: data.compositeURL
    },
    {
      label: "Files",
      url: data.filesUrl
    },
    {
      label: "Group Files",
      url: data.filesForGroupUrl
    }
  ].filter(({url}) => url);
  return /* @__PURE__ */ React.createElement("td", null, links.map(({label, url}) => /* @__PURE__ */ React.createElement("p", {
    key: label
  }, /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, label))));
};
const TagsCell = ({data}) => {
  const tags = [
    {
      present: !!data.category,
      id: "category",
      name: data.category,
      color: "black"
    },
    {
      present: data.isViolent,
      id: "violent",
      name: "Violence",
      color: "#c3c"
    },
    {
      present: data.isVandal,
      id: "vandalism",
      name: "Vandalism",
      color: "#666688"
    },
    {
      present: data.isOrganizer,
      id: "organizer",
      name: "Organizer",
      color: "#6c6F33"
    },
    {
      present: data.hasEarpieceOrRadio,
      id: "earpiece",
      name: "Earpiece / Radio",
      color: "#303"
    },
    {
      present: data.hasHelmetOrArmor,
      id: "helmet",
      name: "Helmet / Armor",
      color: "#939"
    }
  ];
  return /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Categories, {
    id: data._id,
    data: tags
  }));
};
const TwitterUserLink = ({username}) => {
  let formattedUsername = username;
  if (formattedUsername.startsWith("@")) {
    formattedUsername = username.slice(1);
  }
  return /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/${encodeURIComponent(formattedUsername)}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, username);
};
const ProfileLeadsCell = ({data}) => {
  return /* @__PURE__ */ React.createElement("td", null, data.profileLeads.map((lead) => /* @__PURE__ */ React.createElement("p", {
    key: lead
  }, /* @__PURE__ */ React.createElement(TwitterUserLink, {
    username: lead
  }))));
};
const SummaryCell = ({data}) => {
  const sections = [
    {header: "Brief summary of observed actions", body: data.actionsSummary},
    {header: "Appearance notes", body: data.appearanceSummary},
    {header: "Associated with", body: data.associations.join(", ")},
    {
      header: "URLs for additional information / images",
      body: data.otherUrls
    }
  ].filter(({body}) => body);
  return /* @__PURE__ */ React.createElement("td", null, sections.map(({header, body}) => /* @__PURE__ */ React.createElement("p", {
    key: header
  }, /* @__PURE__ */ React.createElement("strong", null, header), /* @__PURE__ */ React.createElement("br", null), body)));
};
const Row = ({data}) => /* @__PURE__ */ React.createElement("tr", {
  "data-title": `suspect-${data._id}`
}, /* @__PURE__ */ React.createElement(ImageCell, {
  data
}), /* @__PURE__ */ React.createElement(HashtagCell, {
  data
}), /* @__PURE__ */ React.createElement(LinksCell, {
  data
}), /* @__PURE__ */ React.createElement(TagsCell, {
  data
}), /* @__PURE__ */ React.createElement("td", null, data.lawEnforcementIdentifiers), /* @__PURE__ */ React.createElement("td", null, data.arrestedOrPubliclyId), /* @__PURE__ */ React.createElement(ProfileLeadsCell, {
  data
}), /* @__PURE__ */ React.createElement("td", null, data.reportedToFbiDate), /* @__PURE__ */ React.createElement(SummaryCell, {
  data
}));
export default Row;
