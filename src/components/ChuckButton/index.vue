<template>
  <a
    @click="$emit('click')"
    class="cj-button"
    :class="{
      'cj-icon-right': svg && !iconLeft,
      'cj-icon-left': svg && iconLeft,
      narrow,
    }"
  >
    <slot></slot>
    <img v-if="svg" :src="require(`@/assets/svg/${svg}.svg`)" />
    <!-- 
                                      Chuck Norris ascii art
                                      
                                          MMMMMMMMMMM
                                       MMMMMMMMMMMMMMMMM
                                   NMMMMMMMMMMMMMMMMMMMMMMMM
                                 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                                MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                                MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMD
                              DMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                             MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                             MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
      NM                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
      MMMMM              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMM8MMMMMMMMMIMMMMM8,. ...........OMMMMMMMMMMMMMMMMMMMMMMMMMMMM
           MMMMMMMMMMMMMMMMMMMMMMM ..N. .....~MMMM...............:MMMMNMMMMMMMMMMMMMMMMMMMMMMM
             NMMMMMMMMMMMMMMMMMMMMM.....:..DMMMMMNZ Z.... .......M$MMMMMMMMMMMMMMMMMMMMMMMMMMM
                 MMMMMMMMMMNMMMMMMM....... 7=MMMMMMO....Z .......MM7MMMMMMMMMMMMMMMMMMMMMMMMM
                    MMMMMMMMMMMMMMMMM  Z...MMMZ .. .,M..,........MMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMM.......DOM ....N7..................MMMMMMMMMMMMMMMMMMMMMMMMMMM
                           MMM....... M. ... .  ... ..............M...$MMMMMMMMMMMMMMMMMMMM
                             ........... ........~. ..............M..=....+MMMMMMMMMMMMMM
                             ......+.NMI~........ . ..............M.,.I...MMMMMMMMMMMMMMN
                             ......$... ...... O..................,.....$MMMMMMMMMMMMN
                             .....M.......... M M.. .............. 8  .OMMMMMMMMMMMN
                              ..=7I,,.,,IMI...M.................. ..MMMMMMMMMMM
                              ....DMMMMMMMMMMMMMMMO..............D...MMMMMMMMM
                               .MMMMMMMMMMMMMMDDMM:,N..............DMMMMMMMMMMM
                               NMMMMMNMM8 . .... ...,~............  MMMMMMMMM
                               MMMMM,:......::~..M8M8MM...............MMMMMM
                               MMMM ... . .........,MM..............MMMMMO$
                               MMMMM... =.=. .. . . MM ....... . ...MMMMMMM
                                NMMMMMMMMMM?  ..O.?NM7 ....... ......MMMMMM
                                 NMMMMMMMMMMMMMMMMM........  $ . ...MMMNMMM
                                  MMMMMMMMMMMMMMM.........,, ......MMMMMMMM
                                   OMMMMMMMM8 , .. .. .,N.... ...:MMMMMMMMMMN
                                    MMMMMMMM?N. ...~MD.:MNI8MMMMMMMMMMMMMMMMMN
                               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                            NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                    NMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                   MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM -->
  </a>
</template>

<script>
export default {
  name: "TheBestButtonThereIs",
  props: {
    svg: {
      type: String,
      default: "",
    },
    iconLeft: {
      type: Boolean,
      default: false,
    },
    narrow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.cj-button {
  padding: 0.875rem 1rem;
  border: 1px solid #cfb995;
  text-align: center;
  position: relative;

  > img {
    position: absolute;
    top: 50%;
  }
  &.narrow {
    padding: 0.625rem 1rem;
  }
  &.cj-icon-right {
    padding-right: 2rem;

    > img {
      right: 1rem;
      transform: translate(50%, -50%);
    }
  }

  &.cj-icon-left {
    padding-left: 2rem;

    > img {
      left: 1rem;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
