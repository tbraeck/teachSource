class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'


  get '/subjects' do
    subjects = Subject.all
    subjects.to_json(include: :resources)
  end

  get '/subjects/:id' do
      subject = Subject.find(params[:id])
      subject.to_json(include: :resources)
  end

  post "/subjects" do
    subject = Subject.create(
      name: params[:name],
      description: params[:description],
      url: params[:url],
      resources: params[:resources]
        )
      subject.to_json
  end

  post "/resources" do
    subject = Subject.find(params[:subject_id])
        resource = subject.resources.create(
          name: params[:name],
          description: params[:description],
          url: params[:url],
          subject_id: params[:subject_id]
        )
        resource.to_json
  end

  delete "/resources/:id" do
        deleteResource = Resource.find_by(id: params[:id])
        deleteResource = Resource.find(params[:id])
        deleteResource.destroy
  end

  patch '/resources/:id' do
      resource = Resource.find(params[:id])
      resource.update(
          name: params[:name],
          description: params[:description],
          url: params[:url],
          subject_id: params[:subject_id]
        )
    resource.to_json 
  end 
    

end
