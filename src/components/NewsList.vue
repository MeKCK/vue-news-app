<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      Vue.js is the absolute rockstar of the JavaScript ecosystem
                    </div>
                    <div>Jan 22 2019</div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    src="/thumbnails/winner.png"
                    srcset="/thumbnails/winner.png 1x,
                            /thumbnails/winner@2x.png 2x"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>