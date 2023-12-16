import '/flutter_flow/flutter_flow_count_controller.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'product_detail_model.dart';
export 'product_detail_model.dart';

class ProductDetailWidget extends StatefulWidget {
  const ProductDetailWidget({Key? key}) : super(key: key);

  @override
  _ProductDetailWidgetState createState() => _ProductDetailWidgetState();
}

class _ProductDetailWidgetState extends State<ProductDetailWidget> {
  late ProductDetailModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ProductDetailModel());
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (isiOS) {
      SystemChrome.setSystemUIOverlayStyle(
        SystemUiOverlayStyle(
          statusBarBrightness: Theme.of(context).brightness,
          systemStatusBarContrastEnforced: true,
        ),
      );
    }

    return GestureDetector(
      onTap: () => _model.unfocusNode.canRequestFocus
          ? FocusScope.of(context).requestFocus(_model.unfocusNode)
          : FocusScope.of(context).unfocus(),
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        appBar: AppBar(
          backgroundColor: Colors.white,
          automaticallyImplyLeading: false,
          title: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              InkWell(
                splashColor: Colors.transparent,
                focusColor: Colors.transparent,
                hoverColor: Colors.transparent,
                highlightColor: Colors.transparent,
                onTap: () async {
                  context.pop();
                },
                child: Icon(
                  Icons.arrow_back_rounded,
                  color: FlutterFlowTheme.of(context).primaryText,
                  size: 24.0,
                ),
              ),
              Text(
                'Product detail',
                style: FlutterFlowTheme.of(context).headlineMedium.override(
                      fontFamily: 'Outfit',
                      color: FlutterFlowTheme.of(context).primaryText,
                      fontSize: 22.0,
                      fontWeight: FontWeight.w800,
                    ),
              ),
              Icon(
                Icons.favorite_border_sharp,
                color: FlutterFlowTheme.of(context).primaryText,
                size: 24.0,
              ),
            ],
          ),
          actions: [],
          centerTitle: false,
          elevation: 2.0,
        ),
        body: Stack(
          alignment: AlignmentDirectional(0.0, 1.0),
          children: [
            Container(
              height: double.infinity,
              decoration: BoxDecoration(),
              child: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Card(
                      clipBehavior: Clip.antiAliasWithSaveLayer,
                      color: FlutterFlowTheme.of(context).secondaryBackground,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.only(
                          bottomLeft: Radius.circular(8.0),
                          bottomRight: Radius.circular(8.0),
                          topLeft: Radius.circular(0.0),
                          topRight: Radius.circular(8.0),
                        ),
                      ),
                      child: Stack(
                        alignment: AlignmentDirectional(0.0, 1.0),
                        children: [
                          Hero(
                            tag: 'image',
                            transitionOnUserGestures: true,
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(8.0),
                              child: Image.asset(
                                'assets/images/image_9.jpg',
                                width: 378.0,
                                height: 384.0,
                                fit: BoxFit.fill,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 20.0, 0.0, 0.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            'Stylum',
                            style: FlutterFlowTheme.of(context)
                                .bodyMedium
                                .override(
                                  fontFamily: 'Manrope',
                                  fontSize: 24.0,
                                  fontWeight: FontWeight.bold,
                                ),
                          ),
                        ]
                            .divide(SizedBox(width: 15.0))
                            .around(SizedBox(width: 15.0)),
                      ),
                    ),
                    Row(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Text(
                          'Womens Floral Print Rayon A-line Kurta',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Manrope',
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.w300,
                                  ),
                        ),
                      ]
                          .divide(SizedBox(width: 15.0))
                          .around(SizedBox(width: 15.0)),
                    ),
                    Padding(
                      padding:
                          EdgeInsetsDirectional.fromSTEB(0.0, 20.0, 0.0, 0.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Icon(
                            Icons.star_half,
                            color: FlutterFlowTheme.of(context).primaryText,
                            size: 24.0,
                          ),
                          Text(
                            '4.5(2,825 Reviews)',
                            style: FlutterFlowTheme.of(context)
                                .bodyMedium
                                .override(
                                  fontFamily: 'Manrope',
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.w900,
                                ),
                          ),
                        ]
                            .divide(SizedBox(width: 15.0))
                            .around(SizedBox(width: 15.0)),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Card(
              clipBehavior: Clip.antiAliasWithSaveLayer,
              color: FlutterFlowTheme.of(context).secondaryBackground,
              elevation: 4.0,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8.0),
              ),
              child: Container(
                width: 403.0,
                height: 100.0,
                decoration: BoxDecoration(
                  color: FlutterFlowTheme.of(context).secondaryBackground,
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                      width: 160.0,
                      height: 50.0,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(8.0),
                        shape: BoxShape.rectangle,
                        border: Border.all(
                          color: FlutterFlowTheme.of(context).alternate,
                          width: 0.0,
                        ),
                      ),
                      child: FlutterFlowCountController(
                        decrementIconBuilder: (enabled) => FaIcon(
                          FontAwesomeIcons.minus,
                          color: enabled
                              ? FlutterFlowTheme.of(context).secondaryText
                              : FlutterFlowTheme.of(context).alternate,
                          size: 20.0,
                        ),
                        incrementIconBuilder: (enabled) => FaIcon(
                          FontAwesomeIcons.plus,
                          color: enabled
                              ? FlutterFlowTheme.of(context).primaryText
                              : FlutterFlowTheme.of(context).alternate,
                          size: 20.0,
                        ),
                        countBuilder: (count) => Text(
                          count.toString(),
                          style: FlutterFlowTheme.of(context).titleLarge,
                        ),
                        count: _model.countControllerValue ??= 0,
                        updateCount: (count) =>
                            setState(() => _model.countControllerValue = count),
                        stepSize: 1,
                      ),
                    ),
                    FFButtonWidget(
                      onPressed: () async {
                        context.pushNamed('Checkout6');
                      },
                      text: 'Add to Cart',
                      options: FFButtonOptions(
                        height: 40.0,
                        padding: EdgeInsetsDirectional.fromSTEB(
                            24.0, 0.0, 24.0, 0.0),
                        iconPadding:
                            EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                        color: FlutterFlowTheme.of(context).primaryText,
                        textStyle:
                            FlutterFlowTheme.of(context).titleSmall.override(
                                  fontFamily: 'Manrope',
                                  color: Colors.white,
                                ),
                        elevation: 3.0,
                        borderSide: BorderSide(
                          color: Colors.transparent,
                          width: 1.0,
                        ),
                        borderRadius: BorderRadius.circular(8.0),
                      ),
                    ),
                  ].divide(SizedBox(width: 2.0)).around(SizedBox(width: 2.0)),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
