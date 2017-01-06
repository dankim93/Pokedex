class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def create
    @pokemon = Pokemon.create(poke_params)
    if @pokemon.save
      render json: @pokemon
    else
      render :json => @pokemon.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def poke_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, :moves => [])
  end
end
