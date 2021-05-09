import _ from 'lodash';

class fieldConfig {

    getApi (moduleName) {

    }

    getColumns () {

    }

    //动态配置列，合并
    getConfigValue (defaultColumns, customColumns, fieldKey) {
        var targetCols = [];

        //如果有默认值
        if (defaultColumns && defaultColumns.length > 0) {
            for (let i = 0; i < defaultColumns.length; i++) {
                var col = defaultColumns[i];

                var hasFind = _.find(customColumns, (item) => {
                    return item[fieldKey] == col[fieldKey];
                });
                if (hasFind) {
                    var obj = {};
                    Object.assign(obj, col, hasFind);
                    targetCols.push(obj);
                }
                else {
                    targetCols.push(col);
                }
            }
        }

        for (let i = 0; i < customColumns.length; i++) {
            var col = customColumns[i];
            var hasFind = _.find(targetCols, (item) => {
                return item[fieldKey] == col[fieldKey];
            });
            if (!hasFind) {
                targetCols.push(col);
            }
        }

        targetCols = _.sortBy(targetCols, (item) => {
            return item.index;
        })

        for (let i = 0; i < targetCols.length; i++) {
            if (targetCols[i].hidden) {
                targetCols[i].visible = false;
            }
            else {
                targetCols[i].visible = true;
            }
        }

        return targetCols;
    }
}