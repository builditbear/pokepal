import Component from '@glimmer/component';

export default class PokemonCardComponent extends Component {
    attack = this.args.pokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat;
    specialAttack = this.args.pokemon.stats.find((stat) => stat.stat.name === 'special-attack').base_stat;
    defense = this.args.pokemon.stats.find((stat) => stat.stat.name === 'defense').base_stat;
    specialDefense = this.args.pokemon.stats.find((stat) => stat.stat.name === 'special-defense').base_stat;
    hp = this.args.pokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat;
    speed = this.args.pokemon.stats.find((stat) => stat.stat.name === 'speed').base_stat;
}
