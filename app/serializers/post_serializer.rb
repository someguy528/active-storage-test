class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :image, :image_url
  # , :title
  
end
